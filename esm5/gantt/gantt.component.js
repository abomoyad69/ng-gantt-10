import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// import { JSGantt } from 'jsgantt-improved';
import * as JSGantt from 'jsgantt-improved';
import { GanttEditorOptions } from './gantt.editoroptions';
var GanttEditorComponent = /** @class */ (function () {
    function GanttEditorComponent() {
        this.id = 'anggantteditor' + Math.floor(Math.random() * 1000000);
        this.optionsChanged = false;
        this.formats = ['Hour', 'Day', 'Week', 'Month', 'Quarter'];
        this.options = new GanttEditorOptions();
        this.format = 'week';
    }
    Object.defineProperty(GanttEditorComponent.prototype, "data", {
        set: function (value) {
            this._data = value;
            if (this.editor) {
                this.destroy();
                this.ngOnInit();
            }
        },
        enumerable: true,
        configurable: true
    });
    GanttEditorComponent.prototype.ngOnInit = function () {
        var optionsBefore = this.options;
        if (!this.optionsChanged && this.editor) {
            optionsBefore = this.editor.options;
        }
        // document.getElementById('embedded-Gantt')
        var g = this.editor = new JSGantt.GanttChart(this.ganttEditorContainer.nativeElement, this.format);
        if (g.getDivId() != null) {
            // JSGantt.parseJSON('./fixes/data.json', g);
            g.setOptions(tslib_1.__assign({ vCaptionType: 'Complete', vQuarterColWidth: 36, vDateTaskDisplayFormat: 'day dd month yyyy', vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', vWeekMinorDateDisplayFormat: 'dd mon', vShowTaskInfoLink: 1, vShowEndWeekDate: 0, vUseSingleCell: 10000, 
                // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers
                vFormatArr: this.formats.slice(1) }, optionsBefore));
            if (this._data && this._data.forEach) {
                this._data.forEach(function (row) {
                    row.pGantt = g;
                    g.AddTaskItemObject(row);
                });
            }
            g.Draw();
        }
    };
    // public get(): JSON {
    //   return this.editor.get();
    // }
    GanttEditorComponent.prototype.setOptions = function (newOptions) {
        if (this.editor) {
            this.destroy();
        }
        this.optionsChanged = true;
        this.options = newOptions;
        this.ngOnInit();
    };
    GanttEditorComponent.prototype.destroy = function () {
        // this.editor.destroy();
    };
    GanttEditorComponent.prototype.getEditor = function () {
        return this.editor;
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
    return GanttEditorComponent;
}());
export { GanttEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZ2FudHQvIiwic291cmNlcyI6WyJnYW50dC9nYW50dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQ2hELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLDhDQUE4QztBQUM5QyxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzNEO0lBcUJFO1FBbkJPLE9BQUUsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM1RCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixZQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFNcEQsWUFBTyxHQUF1QixJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDdkQsV0FBTSxHQUFHLE1BQU0sQ0FBQztJQVl6QixDQUFDO0lBVkQsc0JBQUksc0NBQUk7YUFBUixVQUFTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHVDQUFRLEdBQVI7UUFDRSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdkMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3JDO1FBRUQsNENBQTRDO1FBQzVDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBVSxPQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksRUFBRTtZQUV4Qiw2Q0FBNkM7WUFFN0MsQ0FBQyxDQUFDLFVBQVUsb0JBQ1YsWUFBWSxFQUFFLFVBQVUsRUFDeEIsZ0JBQWdCLEVBQUUsRUFBRSxFQUNwQixzQkFBc0IsRUFBRSxtQkFBbUIsRUFDM0MsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQ2hELDJCQUEyQixFQUFFLFFBQVEsRUFDckMsaUJBQWlCLEVBQUUsQ0FBQyxFQUNwQixnQkFBZ0IsRUFBRSxDQUFDLEVBQ25CLGNBQWMsRUFBRSxLQUFLO2dCQUNyQix1R0FBdUc7Z0JBQ3ZHLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFDOUIsYUFBYSxFQUNoQixDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQ3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUE7YUFDSDtZQUNELENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUVELHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsSUFBSTtJQUVHLHlDQUFVLEdBQWpCLFVBQWtCLFVBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sc0NBQU8sR0FBZDtRQUNFLHlCQUF5QjtJQUMzQixDQUFDO0lBRU0sd0NBQVMsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQTFFb0Q7UUFBcEQsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzBDQUF1QixVQUFVO3NFQUFDO0lBSTdFO1FBQVIsS0FBSyxFQUFFOzBDQUFVLGtCQUFrQjt5REFBNEI7SUFDdkQ7UUFBUixLQUFLLEVBQUU7O3dEQUFpQjtJQUV6QjtRQURDLEtBQUssQ0FBQyxNQUFNLENBQUM7MENBQ0UsTUFBTTtpREFBTixNQUFNO29EQU1yQjtJQW5CVSxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSw2Q0FBNkM7U0FDeEQsQ0FBQzs7T0FDVyxvQkFBb0IsQ0FrRmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWxGRCxJQWtGQztTQWxGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IEpTR2FudHQgfSBmcm9tICdqc2dhbnR0LWltcHJvdmVkJztcclxuaW1wb3J0ICogYXMgSlNHYW50dCBmcm9tICdqc2dhbnR0LWltcHJvdmVkJztcclxuaW1wb3J0IHsgR2FudHRFZGl0b3JPcHRpb25zIH0gZnJvbSAnLi9nYW50dC5lZGl0b3JvcHRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25nLWdhbnR0JyxcclxuICB0ZW1wbGF0ZTogJzxkaXYgW2lkXT1cImlkXCIgI2dhbnR0RWRpdG9yQ29udGFpbmVyPjwvZGl2PidcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbnR0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGVkaXRvcjogYW55O1xyXG4gIHB1YmxpYyBpZCA9ICdhbmdnYW50dGVkaXRvcicgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuICBwdWJsaWMgb3B0aW9uc0NoYW5nZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgZm9ybWF0cyA9IFsnSG91cicsICdEYXknLCAnV2VlaycsICdNb250aCcsICdRdWFydGVyJ107XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2dhbnR0RWRpdG9yQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgZ2FudHRFZGl0b3JDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgX2RhdGE7XHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEdhbnR0RWRpdG9yT3B0aW9ucyA9IG5ldyBHYW50dEVkaXRvck9wdGlvbnMoKTtcclxuICBASW5wdXQoKSBmb3JtYXQgPSAnd2Vlayc7XHJcbiAgQElucHV0KCdkYXRhJylcclxuICBzZXQgZGF0YSh2YWx1ZTogT2JqZWN0KSB7XHJcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IG9wdGlvbnNCZWZvcmUgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uc0NoYW5nZWQgJiYgdGhpcy5lZGl0b3IpIHtcclxuICAgICAgb3B0aW9uc0JlZm9yZSA9IHRoaXMuZWRpdG9yLm9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYmVkZGVkLUdhbnR0JylcclxuICAgIGNvbnN0IGcgPSB0aGlzLmVkaXRvciA9IG5ldyAoPGFueT5KU0dhbnR0KS5HYW50dENoYXJ0KHRoaXMuZ2FudHRFZGl0b3JDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5mb3JtYXQpO1xyXG5cclxuICAgIGlmIChnLmdldERpdklkKCkgIT0gbnVsbCkge1xyXG5cclxuICAgICAgLy8gSlNHYW50dC5wYXJzZUpTT04oJy4vZml4ZXMvZGF0YS5qc29uJywgZyk7XHJcblxyXG4gICAgICBnLnNldE9wdGlvbnMoe1xyXG4gICAgICAgIHZDYXB0aW9uVHlwZTogJ0NvbXBsZXRlJywgIC8vIFNldCB0byBTaG93IENhcHRpb24gOiBOb25lLENhcHRpb24sUmVzb3VyY2UsRHVyYXRpb24sQ29tcGxldGUsXHJcbiAgICAgICAgdlF1YXJ0ZXJDb2xXaWR0aDogMzYsXHJcbiAgICAgICAgdkRhdGVUYXNrRGlzcGxheUZvcm1hdDogJ2RheSBkZCBtb250aCB5eXl5JywgLy8gU2hvd24gaW4gdG9vbCB0aXAgYm94XHJcbiAgICAgICAgdkRheU1ham9yRGF0ZURpc3BsYXlGb3JtYXQ6ICdtb24geXl5eSAtIFdlZWsgd3cnLCAvLyBTZXQgZm9ybWF0IHRvIGRpc3BsYXkgZGF0ZXMgaW4gdGhlIFwiTWFqb3JcIiBoZWFkZXIgb2YgdGhlIFwiRGF5XCIgdmlld1xyXG4gICAgICAgIHZXZWVrTWlub3JEYXRlRGlzcGxheUZvcm1hdDogJ2RkIG1vbicsIC8vIFNldCBmb3JtYXQgdG8gZGlzcGxheSBkYXRlcyBpbiB0aGUgXCJNaW5vclwiIGhlYWRlciBvZiB0aGUgXCJXZWVrXCIgdmlld1xyXG4gICAgICAgIHZTaG93VGFza0luZm9MaW5rOiAxLCAvLyBTaG93IGxpbmsgaW4gdG9vbCB0aXAgKDAvMSlcclxuICAgICAgICB2U2hvd0VuZFdlZWtEYXRlOiAwLCAgLy8gU2hvdy9IaWRlIHRoZSBkYXRlIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIHdlZWsgaW4gaGVhZGVyIGZvclxyXG4gICAgICAgIHZVc2VTaW5nbGVDZWxsOiAxMDAwMCxcclxuICAgICAgICAvLyBFdmVuIHdpdGggc2V0VXNlU2luZ2xlQ2VsbCB1c2luZyBIb3VyIGZvcm1hdCBvbiBzdWNoIGEgbGFyZ2UgY2hhcnQgY2FuIGNhdXNlIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzXHJcbiAgICAgICAgdkZvcm1hdEFycjogdGhpcy5mb3JtYXRzLnNsaWNlKDEpLFxyXG4gICAgICAgIC4uLm9wdGlvbnNCZWZvcmVcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuZm9yRWFjaCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgcm93LnBHYW50dCA9IGc7XHJcbiAgICAgICAgICBnLkFkZFRhc2tJdGVtT2JqZWN0KHJvdyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBnLkRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBnZXQoKTogSlNPTiB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5lZGl0b3IuZ2V0KCk7XHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgc2V0T3B0aW9ucyhuZXdPcHRpb25zOiBHYW50dEVkaXRvck9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLmVkaXRvcikge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3T3B0aW9ucztcclxuICAgIHRoaXMubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEVkaXRvcigpe1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==