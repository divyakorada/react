import { ListRender1, ListRender2, ListRender3 } from "./List"

const RenderList = () => {
    const familyTree = {
        name: "John",
        age: 90,
        children: [
          {
            name: "Mary",
            age: 60,
          },
          {
            name: "Arthur",
            age: 60,
            children: [
              {
                name: "Lily",
                age: 35,
                children: [
                  {
                    name: "Hank",
                    age: 60,
                  },
                  {
                    name: "Henry",
                    age: 57,
                  },
                ],
              },
              {
                name: "Billy",
                age: 40,
              },
              {
                name: "Dolores",
                age: 38,
              },
            ],
          },
        ],
      };
    return(
        <div className="render-list-wrapper">
        <ListRender1/>
        <ListRender2/>
        <ListRender3 a={familyTree}/>
        </div>
    )

}

export default RenderList