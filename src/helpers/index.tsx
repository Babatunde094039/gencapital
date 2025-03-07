
export const formatNumber = (number: any) => {
  return new Intl.NumberFormat("en-NG").format(number);
};

export const maxWidth = '1440px'

export function formatDate(dateString : string ) {
  const [year, month, day] = dateString.split('-');
  return `${month} - ${day} - ${year}`;
}
export function downloadFile(url:string, filename:string) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
  })
  .catch(console.error);
}
