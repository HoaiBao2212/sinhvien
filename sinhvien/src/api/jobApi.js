
export function fetchJobs() {
  return fetch('/jobs.json')
    .then(res => res.json());
}

export function fetchJobDetail(id) {
  return fetch('/jobs.json')
    .then(res => res.json())
    .then(jobs => jobs.find(j => j.id === id));
}
