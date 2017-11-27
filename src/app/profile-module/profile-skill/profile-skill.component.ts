import { Component, OnInit, Input } from '@angular/core';

import { SkillLevel } from 'shared/levels/skills-level-enum';
import { Tool } from 'shared/models/tool-model';

@Component({
    selector: 'profile-skill',
    templateUrl: 'profile-skill.component.html',
    styleUrls: ['profile-skill.component.scss']
})

export class ProfileSkillComponent implements OnInit{
    @Input() tool: Tool;
    level: SkillLevel;
    width: string;

    ngOnInit() {
        this.level = SkillLevel[this.tool.level];
        this.width = `${this.level}%`;
    }
}