import last from '../../utils/last';

export default function NumbersTable({ numbers }) {
  const boxes = [];
  for (let i = 1; i <= 90; i++) {
    const classNames = ['numbers-table__box'];
    if (numbers.includes(i)) {
      classNames.push('numbers-table__box--active');
    }
    if (numbers[numbers.length - 2] === i) {
      classNames.push('numbers-table__box--last');
    }
    if (last(numbers) === i) {
      classNames.push('numbers-table__box--current');
    }
    boxes.push(
      <div className={classNames.join(' ')}>
        <span>{i}</span>
      </div>,
    );
  }

  return <div className="numbers-table">{boxes}</div>;
}
