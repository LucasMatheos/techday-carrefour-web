import { FormEvent } from "react";

export function postalCode(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

export function creditCard(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 19;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
  e.currentTarget.value = value;
  return e;
}

export function dateCard(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 7;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{4})/, "$1/$2");
  e.currentTarget.value = value;
  return e;
}

