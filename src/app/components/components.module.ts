import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TreeComponent } from "./tree/tree.component";
import { TreeNodeComponent } from "./tree-node/tree-node.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [TreeComponent, TreeNodeComponent],
  exports: [TreeComponent]
})
export class ComponentsModule {}
