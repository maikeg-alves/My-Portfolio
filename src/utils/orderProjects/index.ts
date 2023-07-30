import { CombinedProject } from '@interfaces';

export function orderProjects(
  array: Array<CombinedProject>,
): Array<CombinedProject> {
  const dateNow: Date = new Date();
  const newArray = array
    .filter((item) => {
      const [day, month, year] = item.updated_at.split('/');
      const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(
        2,
        '0',
      )}`;
      return new Date(formattedDate).getTime() < dateNow.getTime();
    })
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.updated_at.split('/');
      const formattedDateA = `${yearA}-${monthA.padStart(
        2,
        '0',
      )}-${dayA.padStart(2, '0')}`;

      const [dayB, monthB, yearB] = b.updated_at.split('/');
      const formattedDateB = `${yearB}-${monthB.padStart(
        2,
        '0',
      )}-${dayB.padStart(2, '0')}`;

      return +new Date(formattedDateB) - +new Date(formattedDateA);
    });

  return newArray;
}
