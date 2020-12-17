import { Component } from "@angular/core";
import { ITreeNodeData } from "./components/tree-node/tree-node.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public treeData: ITreeNodeData[] = [
    {
      id: Math.floor(Math.random() * 999999),
      root: true,
      children: [
        {
          id: Math.floor(Math.random() * 999999),
          children: [
            {
              id: Math.floor(Math.random() * 999999),
              children: [],
            },
            {
              id: Math.floor(Math.random() * 999999),
              children: [],
            },
            {
              id: Math.floor(Math.random() * 999999),
              children: [],
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 999999),
          children: [
            {
              id: Math.floor(Math.random() * 999999),
              children: [],
            },
            {
              id: Math.floor(Math.random() * 999999),
              children: [],
            },
            {
              id: Math.floor(Math.random() * 999999),
              children: [
                {
                  id: Math.floor(Math.random() * 999999),
                  children: [],
                },
                {
                  id: Math.floor(Math.random() * 999999),
                  children: [
                    {
                      id: Math.floor(Math.random() * 999999),
                      children: [
                        {
                          id: Math.floor(Math.random() * 999999),
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 999999),
          children: [],
        },
      ],
    },
  ];
}
