import { Component, Input, OnInit } from "@angular/core";

export interface ITreeNodeData {
  id: number;
  children?: ITreeNodeData[];
}

@Component({
  selector: "app-tree-node",
  templateUrl: "./tree-node.component.html",
  styleUrls: ["./tree-node.component.scss"]
})
export class TreeNodeComponent implements OnInit {
  @Input() data: ITreeNodeData;

  public get hasChildren(): boolean {
    return !!(this.data.children && this.data.children.length);
  }

  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }
}
