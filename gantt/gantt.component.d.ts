import { ElementRef, OnInit } from '@angular/core';
import { GanttEditorOptions } from './gantt.editoroptions';
export declare class GanttEditorComponent implements OnInit {
    private editor;
    id: string;
    optionsChanged: boolean;
    formats: string[];
    ganttEditorContainer: ElementRef;
    private _data;
    options: GanttEditorOptions;
    format: string;
    data: Object;
    constructor();
    ngOnInit(): void;
    setOptions(newOptions: GanttEditorOptions): void;
    destroy(): void;
    getEditor(): any;
}
