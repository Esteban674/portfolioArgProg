import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  data1: TreeNode[] = [];
  
  constructor() { }

  ngOnInit(): void {

    this.data1 = [{
      label: 'FULL STACK DEVELOPER',
      type: 'person',
      styleClass: 'fullStack',
      expanded: true,
      data: {name:'', 'avatar': 'fullstack.png'},
      children: [
          {
              label: 'FRONT END',
              type: 'person',
              styleClass: 'frontEnd',
              expanded: true,
              data: {name:'', 'avatar': 'frontEnd.png'},
              children:[{
                label: 'Basics',
                type: 'person',
                styleClass: 'p-person',
                expanded: true,
                data: {name:'HTML5',name1:'CSS',name2:'Javascript',  'avatar': ''},
                children:[{
                  label: 'Frameworks',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Angular', 'avatar': ''},
                  children:[{
                    label: 'Styles',
                    type: 'person',
                    styleClass: 'p-person',
                    expanded: true,
                    data: {name:'Bootstrap', 'avatar': ''},
                  }
                ],
                }
              ],
              }
            ],
          },
          {
              label: 'BACK END',
              type: 'person',
              styleClass: 'backEnd',
              expanded: true,
              data: {name:'', 'avatar': 'backEnd.png'},
              children:[{
                label: 'COO',
                type: 'person',
                styleClass: 'p-person',
                expanded: true,
                data: {name:'asdasd', 'avatar': ''},
              }]
          },
          {
            label: 'DATABASE',
            type: 'person',
            styleClass: 'dataBase',
            expanded: true,
            data: {name:'', 'avatar': 'dataBase.png'},
            children:[{
              label: 'COO',
              type: 'person',
              styleClass: 'p-person',
              expanded: true,
              data: {name:'Mxdfg.', 'avatar': ''},
            }]
        },
        {
          label: 'DEV OPS',
          type: 'person',
          styleClass: 'devOps',
          expanded: true,
          data: {name:'', 'avatar': 'devOps.png'},
          children:[{
            label: 'COO',
            type: 'person',
            styleClass: 'p-person',
            expanded: true,
            data: {name:'sdfdsf', 'avatar': ''},
          }]
      },
      {
        label: 'MOBILE APP',
        type: 'person',
        styleClass: 'mobileApp',
        expanded: true,
        data: {name:'', 'avatar': 'moblieApp.png'},
        children:[{
          label: 'COO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'tytu.', 'avatar': ''},
        }]
    }
             ]
   
     }];
  }

}
