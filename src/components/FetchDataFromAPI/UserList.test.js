import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';
import axios from 'axios'; // Import axios to mock it

// Mock the entire axios module
jest.mock('axios');

describe('UserList with jest.mock', () => {
  // Test Case 1: Renders user list on successful API call
  test('renders a list of users when API call is successful', async () => {
    // Define the mocked response for axios.get
    axios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: 'Alice Smith' },
        { id: 2, name: 'Bob Johnson' },
      ],
    });

    render(<UserList />);

    expect(screen.getByText('Loading users...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Alice Smith')).toBeInTheDocument();
      expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    });

    expect(screen.queryByText('Loading users...')).not.toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/users');
  });

  // Test Case 2: Renders error message on API failure
  test('renders an error message when API call fails', async () => {
    // Mock a rejected promise for axios.get
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('Error: Network Error')).toBeInTheDocument();
    });

    expect(screen.queryByText('Loading users...')).not.toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  // Test Case 3: Renders "No users found" if API returns empty array
  test('renders "No users found" when API returns an empty array', async () => {
    axios.get.mockResolvedValueOnce({
      data: [],
    });

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('No users found.')).toBeInTheDocument();
    });
  });

  // Test Case 4: Displays loading state initially
  test('displays loading state initially', () => {
    // Ensure axios.get doesn't resolve immediately to show loading
    axios.get.mockImplementationOnce(() => new Promise(() => {})); // Never resolves

    render(<UserList />);
    expect(screen.getByText('Loading users...')).toBeInTheDocument();
  });
});