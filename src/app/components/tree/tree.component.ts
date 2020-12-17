import { Component, Input, OnInit } from "@angular/core";
import { ITreeNodeData } from "../tree-node/tree-node.component";

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.scss"]
})
export class TreeComponent implements OnInit {
  @Input() data: ITreeNodeData[];

  constructor() {}

  ngOnInit() {}
}
