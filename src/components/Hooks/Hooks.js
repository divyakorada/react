import React, { Component } from "react";
import {
  UseMemoExample1,
  UseMemoExample2,
  UseMemoExample3,
  UseMemoExample4,
} from "./useMemo";
import { ReactMemoExample1, ReactMemoExample2, ReactMemoExampleItemList } from "./ReactMemo";
import {
  UseCallbackEample1,
  UseCallbackExample2,
  UseCallbackExample3,
} from "./useCallback";
import "./Hooks.scss";
import {
  AuthenticationProvider,
  LoginButton,
  ThemedComponent,
  ThemeProvider,
} from "./useContext";
import { Counter, InputFocus, HighlightTextarea, ButtonClick, MyRefClassComponent } from "./useRef";
import Users from "./Users"

const Hooks = () => {
  return (
    <div className="hooks__wrapper">
      <div className="hooks__outerCtn">
        <h3>UseMemo()</h3>
        <div className="flex">
          {/* <div className="hooks__ctn">
            <UseMemoExample1 />
          </div>
          <div className="hooks__ctn">
            <UseMemoExample2 />
          </div>
          <div className="hooks__ctn">
            <UseMemoExample3 />
          </div> */}
          {/* <UseMemoExample4/> */}
          {[UseMemoExample1, UseMemoExample2, UseMemoExample3].map(
            (Component, index) => {
              return (
                <div className="hooks__ctn" key={index}>
                  <Component />
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="hooks__outerCtn">
        <h3>React.memo()</h3>
        <div className="flex">
          {[ReactMemoExample1, ReactMemoExample2, ReactMemoExampleItemList].map((Component, index) => {
            return (
              <div className="hooks__ctn" key={index}>
                <Component />
              </div>
            );
          })}
        </div>
      </div>

      <div className="hooks__outerCtn">
        <h3>UseCallback()</h3>
        <div className="flex">
          <div className="hooks__ctn">
            <UseCallbackEample1 />
          </div>
          <div className="hooks__ctn">
            <UseCallbackExample2 />
          </div>
          <div className="hooks__ctn">
            <UseCallbackExample3 />
          </div>
        </div>
      </div>

      <div className="hooks__outerCtn">
        <h3>UseContext()</h3>
        <div className="hooks__usecontext flex">
          <ThemeProvider>
            <ThemedComponent />
          </ThemeProvider>
          <AuthenticationProvider>
            <LoginButton />
          </AuthenticationProvider>
        </div>
      </div>

      <div className="hooks__outerCtn">
        <h3>UseRef()</h3>
        <div className="hooks__useRef flex">
          <InputFocus />
          <Counter />
          <HighlightTextarea/>
          <ButtonClick/>
          <MyRefClassComponent/>
        </div>
      </div>

      <div className="hooks__outerCtn">
        <h3>Custom Hook</h3>
        <div className="hooks__usecontext flex">
         <Users />
        </div>
      </div>

    </div>
  );
};

export default Hooks;
