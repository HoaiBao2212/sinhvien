// src/api/jobApi.js
// Mock API for job listing and job details
import quancafe from '../assets/company/quan-cafe.png';
import phucvucafe from '../assets/title/phuc-vu-cafe.jpg';
import quanan from '../assets/company/quan-an.jpg';
import ruachen from '../assets/title/rua-chen.png';
import cuahang from '../assets/company/cua-hang.jpg';
import banhang from '../assets/title/ban-hang.jpg';
const jobs = [
  {
    id: 1,
    title: 'Nhân viên bán hàng',
    img: banhang,
    idcompany: 1,
    company: 'Cửa hàng Dart',
    imgcompany: cuahang,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - Thứ 6',
    salary: '5,000,000 VNĐ',
    description: 'Bán hàng tại cửa hàng, ca xoay, ưu tiên sinh viên.'
  },
  {
    id: 2,
    title: 'Phục vụ quán cafe',
    img: phucvucafe,
    idcompany: 2,
    company: 'Cafe BAO',
    imgcompany: quancafe,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - CN',
    salary: '4,500,000 VNĐ',
    description: 'Phục vụ bàn, làm việc theo ca, môi trường năng động.'
  },
  {
    id: 3,
    title: 'Rửa chén quán ăn',
    img: ruachen,
    idcompany: 3,
    company: 'Quán bún bò vỉa hè',
    imgcompany: quanan,
    location: 'Ngũ Hành Sơn',
    time: '15h30 → 20h',
    date: 'Thứ 2 - CN',
    salary: '4,000,000 VNĐ',
    description: 'Rửa chén quán ăn, làm việc theo ca, siêng năng.'
  },
  {
    id: 4,
    title: 'Nhân viên bán hàng',
    img: banhang,
    idcompany: 1,
    company: 'Cửa hàng Dart',
    imgcompany: cuahang,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - Thứ 6',
    salary: '5,000,000 VNĐ',
    description: 'Bán hàng tại cửa hàng, ca xoay, ưu tiên sinh viên.'
  },
  {
    id: 5,
    title: 'Phục vụ quán cafe',
    img: phucvucafe,
    idcompany: 2,
    company: 'Cafe BAO',
    imgcompany: quancafe,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - CN',
    salary: '4,500,000 VNĐ',
    description: 'Phục vụ bàn, làm việc theo ca, môi trường năng động.'
  },
  {
    id: 6,
    title: 'Rửa chén quán ăn',
    img: ruachen,
    idcompany: 3,
    company: 'Quán bún bò vỉa hè',
    imgcompany: quanan,
    location: 'Ngũ Hành Sơn',
    time: '15h30 → 20h',
    date: 'Thứ 2 - CN',
    salary: '4,000,000 VNĐ',
    description: 'Rửa chén quán ăn, làm việc theo ca, siêng năng.'
  },
  {
    id: 7,
    title: 'Nhân viên bán hàng',
    img: banhang,
    idcompany: 1,
    company: 'Cửa hàng Dart',
    imgcompany: cuahang,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - Thứ 6',
    salary: '5,000,000 VNĐ',
    description: 'Bán hàng tại cửa hàng, ca xoay, ưu tiên sinh viên.'
  },
  {
    id: 8,
    title: 'Phục vụ quán cafe',
    img: phucvucafe,
    idcompany: 2,
    company: 'Cafe BAO',
    imgcompany: quancafe,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - CN',
    salary: '4,500,000 VNĐ',
    description: 'Phục vụ bàn, làm việc theo ca, môi trường năng động.'
  },
  {
    id: 9,
    title: 'Rửa chén quán ăn',
    img: ruachen,
    idcompany: 3,
    company: 'Quán bún bò vỉa hè',
    imgcompany: quanan,
    location: 'Ngũ Hành Sơn',
    time: '15h30 → 20h',
    date: 'Thứ 2 - CN',
    salary: '4,000,000 VNĐ',
    description: 'Rửa chén quán ăn, làm việc theo ca, siêng năng.'
  },
  {
    id: 10,
    title: 'Nhân viên bán hàng',
    img: banhang,
    idcompany: 1,
    company: 'Cửa hàng Dart',
    imgcompany: cuahang,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - Thứ 6',
    salary: '5,000,000 VNĐ',
    description: 'Bán hàng tại cửa hàng, ca xoay, ưu tiên sinh viên.'
  },
  {
    id: 11,
    title: 'Phục vụ quán cafe',
    img: phucvucafe,
    idcompany: 2,
    company: 'Cafe BAO',
    imgcompany: quancafe,
    location: 'Ngũ Hành Sơn',
    time: '7h30 → 11h',
    date: 'Thứ 2 - CN',
    salary: '4,500,000 VNĐ',
    description: 'Phục vụ bàn, làm việc theo ca, môi trường năng động.'
  },
  {
    id: 12,
    title: 'Rửa chén quán ăn',
    img: ruachen,
    idcompany: 3,
    company: 'Quán bún bò vỉa hè',
    imgcompany: quanan,
    location: 'Ngũ Hành Sơn',
    time: '15h30 → 20h',
    date: 'Thứ 2 - CN',
    salary: '4,000,000 VNĐ',
    description: 'Rửa chén quán ăn, làm việc theo ca, siêng năng.'
  },
  
  
];

export function fetchJobs() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jobs), 10);
  });
}

export function fetchJobDetail(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const job = jobs.find(j => j.id === id);
      resolve(job);
    }, 10);
  });
}
