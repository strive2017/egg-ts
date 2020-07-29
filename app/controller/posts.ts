import { Controller } from 'egg';

export default class PostsController extends Controller {
  public async index() {
    this.ctx.body = {
        state:0,
        message : 'index',
    }
  }
  public async new() {
    this.ctx.body = {
        state:0,
        message : 'new',
    }
  }
  public async show() {
    this.ctx.body = {
        state:0,
        message : 'show',
    }
  }
  public async edit() {
    this.ctx.body = {
        state:0,
        message : 'edit',
    }
  }
  public async create() {
    this.ctx.body = {
        state:0,
        message : 'create',
    }
  }
  public async updated() {
    this.ctx.body = {
        state:0,
        message : 'updated',
    }
  }
  public async destroy() {
    this.ctx.body = {
        state:0,
        message : 'destroy',
    }
  }
}
