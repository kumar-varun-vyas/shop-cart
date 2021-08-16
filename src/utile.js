export default function formatCurrency(num){
    return "$" +Number.parseInt(num).toFixed(1).toLocaleString()+ " ";
}