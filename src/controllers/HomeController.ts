import type { Request, Response } from 'express';

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Home";
    res.render('home/index', { viewData: viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "About";
    res.render('home/about', { viewData: viewData });
  }

  static data(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Data";
    res.render('home/data', { viewData: viewData });
  }

  static contact(req: Request, res: Response): void {
    const viewData: { [Key: string]: any} = {};
    viewData["title"] = "Contact";
    res.render('home/contact', { viewData: viewData });
  }

}