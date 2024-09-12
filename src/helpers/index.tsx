
export const formatNumber = (number: any) => {
  return new Intl.NumberFormat("en-NG").format(number);
};

export const maxWidth = '1440px'

export function formatDate(dateString : string ) {
  const [year, month, day] = dateString.split('-');
  return `${month} - ${day} - ${year}`;
}

