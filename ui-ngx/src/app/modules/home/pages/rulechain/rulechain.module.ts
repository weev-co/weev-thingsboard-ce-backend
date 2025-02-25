///
/// Copyright © 2016-2024 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RuleChainComponent } from '@modules/home/pages/rulechain/rulechain.component';
import { RuleChainRoutingModule } from '@modules/home/pages/rulechain/rulechain-routing.module';
import { HomeComponentsModule } from '@modules/home/components/home-components.module';
import { RuleChainTabsComponent } from '@home/pages/rulechain/rulechain-tabs.component';
import {
  AddRuleNodeDialogComponent,
  AddRuleNodeLinkDialogComponent, CreateNestedRuleChainDialogComponent,
  RuleChainPageComponent
} from './rulechain-page.component';
import { RuleNodeComponent } from '@home/pages/rulechain/rulenode.component';
import { FC_NODE_COMPONENT_CONFIG } from 'ngx-flowchart';
import { RuleNodeDetailsComponent } from './rule-node-details.component';
import { RuleNodeLinkComponent } from './rule-node-link.component';
import { LinkLabelsComponent } from '@home/pages/rulechain/link-labels.component';
import { RuleNodeConfigComponent } from './rule-node-config.component';
import { DurationLeftPipe } from '@shared/pipe/duration-left.pipe';
import { EntityDebugSettingsButtonComponent } from '@home/components/entity/debug/entity-debug-settings-button.component';

@NgModule({
  declarations: [
    RuleChainComponent,
    RuleChainTabsComponent,
    RuleChainPageComponent,
    RuleNodeComponent,
    RuleNodeDetailsComponent,
    RuleNodeConfigComponent,
    LinkLabelsComponent,
    RuleNodeLinkComponent,
    AddRuleNodeLinkDialogComponent,
    AddRuleNodeDialogComponent,
    CreateNestedRuleChainDialogComponent
  ],
  providers: [
    {
      provide: FC_NODE_COMPONENT_CONFIG,
      useValue: {
        nodeComponentType: RuleNodeComponent
      }
    }
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeComponentsModule,
    RuleChainRoutingModule,
    DurationLeftPipe,
    EntityDebugSettingsButtonComponent
  ]
})
export class RuleChainModule { }
