export default function convertDate(){
    const dateString = '2023-03-11T18:28:21.000000Z';
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate
}
