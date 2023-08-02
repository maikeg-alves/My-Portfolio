export function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('pt-BR');
}
