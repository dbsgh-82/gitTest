const data = {
  data: [
      { id: 1, text: '작업 #1', start_date: '2024-12-25', duration: 3, progress: 0.6},
      { id: 2, text: '작업 #2', start_date: '2024-12-28', duration: 3, progress: 0.4},
      { id: 3, text: '작업 #1-1', start_date: '2024-12-25', duration: 1, progress: 1 ,parent:1},
      { id: 4, text: '작업 #1-2', start_date: '2024-12-26', duration: 2, progress: 0.5,parent:1 },
  ],
  links: [
      { id: 1, source: 1, target: 2, type: '0' },
      { id: 2, source: 3, target: 4, type: '0' },
  ]
};

export default data;