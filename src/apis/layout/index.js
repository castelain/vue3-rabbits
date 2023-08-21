import httpInstance from "@/utils/http";

export function getCategoryHeaders() {
  return httpInstance({
    url: 'home/category/head',
  });
}