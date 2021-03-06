(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('jsgantt-improved')) :
    typeof define === 'function' && define.amd ? define('ng-gantt-but-10', ['exports', '@angular/core', '@angular/common', 'jsgantt-improved'], factory) :
    (global = global || self, factory(global['ng-gantt-but-10'] = {}, global.ng.core, global.ng.common, global.jsganttImproved));
}(this, (function (exports, core, common, jsganttImproved) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var GanttEditorOptions = /** @class */ (function () {
        // public onEditable: (node: GanttEditorTreeNode | {}) => boolean | { field: boolean, value: boolean };
        // public theme: Number;
        // public language: String;
        // public languages: Object;
        function GanttEditorOptions() {
            // this.escapeUnicode = false;
            // this.sortObjectKeys = false;
            // this.history = true;
        }
        return GanttEditorOptions;
    }());

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
            var g = this.editor = new jsganttImproved.GanttChart(this.ganttEditorContainer.nativeElement, this.format);
            if (g.getDivId() != null) {
                // JSGantt.parseJSON('./fixes/data.json', g);
                g.setOptions(__assign({ vCaptionType: 'Complete', vQuarterColWidth: 36, vDateTaskDisplayFormat: 'day dd month yyyy', vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', vWeekMinorDateDisplayFormat: 'dd mon', vShowTaskInfoLink: 1, vShowEndWeekDate: 0, vUseSingleCell: 10000, 
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
        __decorate([
            core.ViewChild('ganttEditorContainer', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], GanttEditorComponent.prototype, "ganttEditorContainer", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", GanttEditorOptions)
        ], GanttEditorComponent.prototype, "options", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], GanttEditorComponent.prototype, "format", void 0);
        __decorate([
            core.Input('data'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], GanttEditorComponent.prototype, "data", null);
        GanttEditorComponent = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: 'ng-gantt-but-10',
                template: '<div [id]="id" #ganttEditorContainer></div>'
            }),
            __metadata("design:paramtypes", [])
        ], GanttEditorComponent);
        return GanttEditorComponent;
    }());

    var NgGanttEditorModule = /** @class */ (function () {
        function NgGanttEditorModule() {
        }
        NgGanttEditorModule_1 = NgGanttEditorModule;
        NgGanttEditorModule.forRoot = function () {
            return {
                ngModule: NgGanttEditorModule_1,
                providers: []
            };
        };
        var NgGanttEditorModule_1;
        NgGanttEditorModule = NgGanttEditorModule_1 = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    GanttEditorComponent
                ],
                exports: [
                    GanttEditorComponent
                ]
            })
        ], NgGanttEditorModule);
        return NgGanttEditorModule;
    }());

    exports.GanttEditorComponent = GanttEditorComponent;
    exports.GanttEditorOptions = GanttEditorOptions;
    exports.NgGanttEditorModule = NgGanttEditorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-gantt-but-10.umd.js.map
