import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    const now = new Date();
    const postDate = new Date(value);
    const timeDiff = now.getTime() - postDate.getTime();

    const units = [
      { label: 'segundo', time: 1000 },
      { label: 'minuto', time: 60 * 1000 },
      { label: 'hora', time: 60 * 60 * 1000 },
      { label: 'día', time: 24 * 60 * 60 * 1000 },
    ];

    for (let i = 0; i < units.length; i++) {
      const unit = units[i];
      const diff = Math.floor(timeDiff / unit.time);
      if (diff < 60) {
        return `Hace ${diff} ${unit.label}${diff === 1 ? '' : 's'}`;
      }
    }

    return 'Hace mucho tiempo';
  }
}
