import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ROUTING MODULE
import { ProjectRoutingModule } from './project-routing.module';
// COMPONENTS
import { ProjectHomeComponent } from './components/project-home/project-home.component';
import { ObjectiveComponent } from './components/objective/objective.component';
import { ToolAnalysisComponent } from './components/tool-analysis/tool-analysis.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [ObjectiveComponent, ToolAnalysisComponent, RoadmapComponent, StatusComponent, ProjectHomeComponent],
  imports: [CommonModule, ProjectRoutingModule]
})
export class ProjectModule {}
