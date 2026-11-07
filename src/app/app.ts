import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { OlaMundo } from './ola-mundo/ola-mundo';
import { ItsAliveAndIt } from './its-alive-and-it/its-alive-and-it';

@Component({
  imports: [RouterOutlet, HelloWorld, OlaMundo, ItsAliveAndIt],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('teste-de-angular');
}
