import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// import { JSGantt } from 'jsgantt-improved';
import * as JSGantt from 'jsgantt-improved';
import { GanttEditorOptions } from './gantt.editoroptions';
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
        const g = this.editor = new JSGantt.GanttChart(this.ganttEditorContainer.nativeElement, this.format);
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
tslib_1.__decorate([
    ViewChild('ganttEditorContainer', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], GanttEditorComponent.prototype, "ganttEditorContainer", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", GanttEditorOptions)
], GanttEditorComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], GanttEditorComponent.prototype, "format", void 0);
tslib_1.__decorate([
    Input('data'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], GanttEditorComponent.prototype, "data", null);
GanttEditorComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'ng-gantt-but-10',
        template: '<div [id]="id" #ganttEditorContainer></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GanttEditorComponent);
export { GanttEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZ2FudHQvIiwic291cmNlcyI6WyJnYW50dC9nYW50dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQ2hELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLDhDQUE4QztBQUM5QyxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzNELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBcUIvQjtRQW5CTyxPQUFFLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDNUQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBTXBELFlBQU8sR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZELFdBQU0sR0FBRyxNQUFNLENBQUM7SUFZekIsQ0FBQztJQVZELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdkMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3JDO1FBRUQsNENBQTRDO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBVSxPQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksRUFBRTtZQUV4Qiw2Q0FBNkM7WUFFN0MsQ0FBQyxDQUFDLFVBQVUsaUJBQ1YsWUFBWSxFQUFFLFVBQVUsRUFDeEIsZ0JBQWdCLEVBQUUsRUFBRSxFQUNwQixzQkFBc0IsRUFBRSxtQkFBbUIsRUFDM0MsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQ2hELDJCQUEyQixFQUFFLFFBQVEsRUFDckMsaUJBQWlCLEVBQUUsQ0FBQyxFQUNwQixnQkFBZ0IsRUFBRSxDQUFDLEVBQ25CLGNBQWMsRUFBRSxLQUFLO2dCQUNyQix1R0FBdUc7Z0JBQ3ZHLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFDOUIsYUFBYSxFQUNoQixDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdkIsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQTthQUNIO1lBQ0QsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixJQUFJO0lBRUcsVUFBVSxDQUFDLFVBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sT0FBTztRQUNaLHlCQUF5QjtJQUMzQixDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBRUYsQ0FBQTtBQTVFc0Q7SUFBcEQsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO3NDQUF1QixVQUFVO2tFQUFDO0FBSTdFO0lBQVIsS0FBSyxFQUFFO3NDQUFVLGtCQUFrQjtxREFBNEI7QUFDdkQ7SUFBUixLQUFLLEVBQUU7O29EQUFpQjtBQUV6QjtJQURDLEtBQUssQ0FBQyxNQUFNLENBQUM7c0NBQ0UsTUFBTTs2Q0FBTixNQUFNO2dEQU1yQjtBQW5CVSxvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSw2Q0FBNkM7S0FDeEQsQ0FBQzs7R0FDVyxvQkFBb0IsQ0FrRmhDO1NBbEZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgSlNHYW50dCB9IGZyb20gJ2pzZ2FudHQtaW1wcm92ZWQnO1xyXG5pbXBvcnQgKiBhcyBKU0dhbnR0IGZyb20gJ2pzZ2FudHQtaW1wcm92ZWQnO1xyXG5pbXBvcnQgeyBHYW50dEVkaXRvck9wdGlvbnMgfSBmcm9tICcuL2dhbnR0LmVkaXRvcm9wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmctZ2FudHQnLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBbaWRdPVwiaWRcIiAjZ2FudHRFZGl0b3JDb250YWluZXI+PC9kaXY+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FudHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XHJcbiAgcHVibGljIGlkID0gJ2FuZ2dhbnR0ZWRpdG9yJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG4gIHB1YmxpYyBvcHRpb25zQ2hhbmdlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBmb3JtYXRzID0gWydIb3VyJywgJ0RheScsICdXZWVrJywgJ01vbnRoJywgJ1F1YXJ0ZXInXTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZ2FudHRFZGl0b3JDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBnYW50dEVkaXRvckNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0YTtcclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogR2FudHRFZGl0b3JPcHRpb25zID0gbmV3IEdhbnR0RWRpdG9yT3B0aW9ucygpO1xyXG4gIEBJbnB1dCgpIGZvcm1hdCA9ICd3ZWVrJztcclxuICBASW5wdXQoJ2RhdGEnKVxyXG4gIHNldCBkYXRhKHZhbHVlOiBPYmplY3QpIHtcclxuICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLmVkaXRvcikge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgb3B0aW9uc0JlZm9yZSA9IHRoaXMub3B0aW9ucztcclxuICAgIGlmICghdGhpcy5vcHRpb25zQ2hhbmdlZCAmJiB0aGlzLmVkaXRvcikge1xyXG4gICAgICBvcHRpb25zQmVmb3JlID0gdGhpcy5lZGl0b3Iub3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1iZWRkZWQtR2FudHQnKVxyXG4gICAgY29uc3QgZyA9IHRoaXMuZWRpdG9yID0gbmV3ICg8YW55PkpTR2FudHQpLkdhbnR0Q2hhcnQodGhpcy5nYW50dEVkaXRvckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmZvcm1hdCk7XHJcblxyXG4gICAgaWYgKGcuZ2V0RGl2SWQoKSAhPSBudWxsKSB7XHJcblxyXG4gICAgICAvLyBKU0dhbnR0LnBhcnNlSlNPTignLi9maXhlcy9kYXRhLmpzb24nLCBnKTtcclxuXHJcbiAgICAgIGcuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgdkNhcHRpb25UeXBlOiAnQ29tcGxldGUnLCAgLy8gU2V0IHRvIFNob3cgQ2FwdGlvbiA6IE5vbmUsQ2FwdGlvbixSZXNvdXJjZSxEdXJhdGlvbixDb21wbGV0ZSxcclxuICAgICAgICB2UXVhcnRlckNvbFdpZHRoOiAzNixcclxuICAgICAgICB2RGF0ZVRhc2tEaXNwbGF5Rm9ybWF0OiAnZGF5IGRkIG1vbnRoIHl5eXknLCAvLyBTaG93biBpbiB0b29sIHRpcCBib3hcclxuICAgICAgICB2RGF5TWFqb3JEYXRlRGlzcGxheUZvcm1hdDogJ21vbiB5eXl5IC0gV2VlayB3dycsIC8vIFNldCBmb3JtYXQgdG8gZGlzcGxheSBkYXRlcyBpbiB0aGUgXCJNYWpvclwiIGhlYWRlciBvZiB0aGUgXCJEYXlcIiB2aWV3XHJcbiAgICAgICAgdldlZWtNaW5vckRhdGVEaXNwbGF5Rm9ybWF0OiAnZGQgbW9uJywgLy8gU2V0IGZvcm1hdCB0byBkaXNwbGF5IGRhdGVzIGluIHRoZSBcIk1pbm9yXCIgaGVhZGVyIG9mIHRoZSBcIldlZWtcIiB2aWV3XHJcbiAgICAgICAgdlNob3dUYXNrSW5mb0xpbms6IDEsIC8vIFNob3cgbGluayBpbiB0b29sIHRpcCAoMC8xKVxyXG4gICAgICAgIHZTaG93RW5kV2Vla0RhdGU6IDAsICAvLyBTaG93L0hpZGUgdGhlIGRhdGUgZm9yIHRoZSBsYXN0IGRheSBvZiB0aGUgd2VlayBpbiBoZWFkZXIgZm9yXHJcbiAgICAgICAgdlVzZVNpbmdsZUNlbGw6IDEwMDAwLFxyXG4gICAgICAgIC8vIEV2ZW4gd2l0aCBzZXRVc2VTaW5nbGVDZWxsIHVzaW5nIEhvdXIgZm9ybWF0IG9uIHN1Y2ggYSBsYXJnZSBjaGFydCBjYW4gY2F1c2UgaXNzdWVzIGluIHNvbWUgYnJvd3NlcnNcclxuICAgICAgICB2Rm9ybWF0QXJyOiB0aGlzLmZvcm1hdHMuc2xpY2UoMSksXHJcbiAgICAgICAgLi4ub3B0aW9uc0JlZm9yZVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5mb3JFYWNoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICByb3cucEdhbnR0ID0gZztcclxuICAgICAgICAgIGcuQWRkVGFza0l0ZW1PYmplY3Qocm93KTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGcuRHJhdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIGdldCgpOiBKU09OIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmVkaXRvci5nZXQoKTtcclxuICAvLyB9XHJcblxyXG4gIHB1YmxpYyBzZXRPcHRpb25zKG5ld09wdGlvbnM6IEdhbnR0RWRpdG9yT3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25zQ2hhbmdlZCA9IHRydWU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xyXG4gICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyB0aGlzLmVkaXRvci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RWRpdG9yKCl7XHJcbiAgICByZXR1cm4gdGhpcy5lZGl0b3I7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19