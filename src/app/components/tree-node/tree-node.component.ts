import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { trigger, transition, style, animate } from '@angular/animations';

export interface ITreeNodeData {
  id: number;
  root?: boolean;
  collapsed?: boolean;
  children?: ITreeNodeData[];
}

@Component({
  selector: "app-tree-node",
  templateUrl: "./tree-node.component.html",
  styleUrls: ["./tree-node.component.scss"],
  animations: [
    trigger('collapse', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.3s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class TreeNodeComponent implements OnInit, AfterViewInit {
  @ViewChild("treeNode", { static: false })
  private nodeRef!: ElementRef<HTMLDivElement>;

  @Input() data: ITreeNodeData;

  public get hasChildren(): boolean {
    return !!(this.data.children && this.data.children.length);
  }

  constructor() {}

  public collapseTree() {
    this.data.collapsed = !this.data.collapsed;
  }

  ngOnInit() {
    if (this.hasChildren) {
      this.data.root = true;
      this.data.collapsed = false;
    }

    if (this.data.root) {
      console.log(this.data.id)
    }
  }

  ngAfterViewInit(): void {
    if (this.nodeRef && this.nodeRef.nativeElement) {
      const element = this.nodeRef.nativeElement;
    }
  }
}
