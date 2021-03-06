import { __decorate, __metadata } from 'tslib';
import { ViewChild, ElementRef, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttChart } from 'jsgantt-improved';

class GanttEditorOptions {
    // public onEditable: (node: GanttEditorTreeNode | {}) => boolean | { field: boolean, value: boolean };
    // public theme: Number;
    // public language: String;
    // public languages: Object;
    constructor() {
        // this.escapeUnicode = false;
        // this.sortObjectKeys = false;
        // this.history = true;
    }
}

let GanttEditorComponent = class GanttEditorComponent {
    constructor() {
        this.id = 'anggantteditor' + Math.floor(Math.random() * 1000000);
        this.optionsChanged = false;
        this.formats = ['Hour', 'Day', 'Week', 'Month', 'Quarter'];
        this.options = new GanttEditorOptions();
        this.format = 'week';
    }
    set data(value) {
        this._data = value;
        if (this.editor) {
            this.destroy();
            this.ngOnInit();
        }
    }
    ngOnInit() {
        let optionsBefore = this.options;
        if (!this.optionsChanged && this.editor) {
            optionsBefore = this.editor.options;
        }
        // document.getElementById('embedded-Gantt')
        const g = this.editor = new GanttChart(this.ganttEditorContainer.nativeElement, this.format);
        if (g.getDivId() != null) {
            // JSGantt.parseJSON('./fixes/data.json', g);
            g.setOptions(Object.assign({ vCaptionType: 'Complete', vQuarterColWidth: 36, vDateTaskDisplayFormat: 'day dd month yyyy', vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', vWeekMinorDateDisplayFormat: 'dd mon', vShowTaskInfoLink: 1, vShowEndWeekDate: 0, vUseSingleCell: 10000, 
                // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers
                vFormatArr: this.formats.slice(1) }, optionsBefore));
            if (this._data && this._data.forEach) {
                this._data.forEach(row => {
                    row.pGantt = g;
                    g.AddTaskItemObject(row);
                });
            }
            g.Draw();
        }
    }
    // public get(): JSON {
    //   return this.editor.get();
    // }
    setOptions(newOptions) {
        if (this.editor) {
            this.destroy();
        }
        this.optionsChanged = true;
        this.options = newOptions;
        this.ngOnInit();
    }
    destroy() {
        // this.editor.destroy();
    }
    getEditor() {
        return this.editor;
    }
};
__decorate([
    ViewChild('ganttEditorContainer', { static: true }),
    __metadata("design:type", ElementRef)
], GanttEditorComponent.prototype, "ganttEditorContainer", void 0);
__decorate([
    Input(),
    __metadata("design:type", GanttEditorOptions)
], GanttEditorComponent.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GanttEditorComponent.prototype, "format", void 0);
__decorate([
    Input('data'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GanttEditorComponent.prototype, "data", null);
GanttEditorComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'ng-gantt-but-10',
        template: '<div [id]="id" #ganttEditorContainer></div>'
    }),
    __metadata("design:paramtypes", [])
], GanttEditorComponent);

var NgGanttEditorModule_1;
let NgGanttEditorModule = NgGanttEditorModule_1 = class NgGanttEditorModule {
    static forRoot() {
        return {
            ngModule: NgGanttEditorModule_1,
            providers: []
        };
    }
};
NgGanttEditorModule = NgGanttEditorModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            GanttEditorComponent
        ],
        exports: [
            GanttEditorComponent
        ]
    })
], NgGanttEditorModule);

export { GanttEditorComponent, GanttEditorOptions, NgGanttEditorModule };
//# sourceMappingURL=ng-gantt-but-10.js.map
