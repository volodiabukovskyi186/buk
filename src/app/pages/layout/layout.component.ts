import {
  Component,
  Input,
  OnInit,
  effect,
  signal,
  DestroyRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
})
export class LayoutComponent implements OnInit {
  @Input({ required: true }) id!: string; // Обов'язковий параметр
  message =99999999;
  data = signal<string | null>(null); // Сигнал для даних

  count = signal(0); // Сигнал для зберігання лічильника
  countSecond = signal(0); // Сигнал для зберігання лічильника

  increment() {
    this.count.update((value) => value + 1); // Оновлення значення
  }

  incrementTwo() {
    this.countSecond.update((value) => value + 1); // Оновлення значення
  }

  constructor(private destroyRef: DestroyRef) {
    // Ефекти для логування змін
    effect(() => {
      console.log(`Count has changed to: ${this.count()}`);
      console.log(`CountSecond has changed to: ${this.countSecond()}`);
    });

    // Реєстрація очищення
    destroyRef.onDestroy(() => {
      console.log('Component destroyed');
    });


  }

  ngOnInit(): void {
    console.log('PARAMS_ID:', this.id); // Перевірка отриманого параметра
    console.log('message:', this.message); // Перевірка отриманого параметра
    this.loadData(); // Завантаження даних
  }

  test(data: any) {
    console.log(data);
    this.test('3333334242')
  }

  loadData() {
    // Емулюємо завантаження даних із затримкою
    setTimeout(() => {
      this.data.set('Це завантажений контент!');
    }, 3000); // Дані з'являться через 3 секунди
  }



}
