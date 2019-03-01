// 13가지 색상 중 랜덤으로 선택하는 함수
export default function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#24292e',
        '#1862ac',
        '#38ced5',
        '#be63d5',
        '#fe1b7a',
        '#1bfe41',
        '#dbfe1b',
        '#feb81b',
        '#fe4f1b',
        '#7a3925'
    ];

    // 0부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    // 랜덤 색상 반환
    return colors[random];
}