// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDetail from '../../../app/controller/detail';
import ExportHome from '../../../app/controller/home';
import ExportList from '../../../app/controller/list';
import ExportPosts from '../../../app/controller/posts';

declare module 'egg' {
  interface IController {
    detail: ExportDetail;
    home: ExportHome;
    list: ExportList;
    posts: ExportPosts;
  }
}
