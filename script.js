/* ── State ───────────────────────────────────────────────── */
let isDark = false;

/* ── Elements ────────────────────────────────────────────── */
const html = document.documentElement;
const gradeGrid = document.getElementById('grade-grid');
const statusLabel = document.getElementById('status-label');
const searchBox = document.getElementById('search-box');
const countLabel = document.getElementById('count-label');
const themeBtn = document.getElementById('theme-btn');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
const fsBtn = document.getElementById('fs-btn');
const iconExpand = document.getElementById('icon-fs-expand');
const iconCollapse = document.getElementById('icon-fs-collapse');
const cap = new URLSearchParams(window.location.search).get('cap');

if (cap === '1' || cap === '2') {
  html.dataset.cap = cap;
  statusLabel.textContent = cap === '1' ? 'Tin học lớp 3 – 5' : 'Tin học lớp 6 – 9';
}

/* ── Static lesson data (generated from local filesystem) ──
   Cập nhật dữ liệu này mỗi khi thêm file mới vào thư mục.
────────────────────────────────────────────────────────── */
const GRADE_DATA = {
  3: {
    "bai-01": [
      "b_i_ki_m_tra_tin_h_c_6.html",
      "b_i_ki_m_tra_tr_c_nghi_m_chinh_ph_c_nh_cao.html",
      "google_maps_satellite_embed (1).html",
      "kiem_tra_tin_8_GHKI (3).html",
      "mo phong.html",
      "mo_phong_hinh_hoc_lop_6.html",
      "Qwen_html_20261008_fddwh13x8.html",
      "sssss.html",
      "test-nop-bai.html"
    ],
    "bai-02": [],
    "bai-03": [],
    "bai-04": [],
    "bai-05": [],
    "bai-06": [],
    "bai-07": [],
    "bai-08": [],
    "bai-09": [],
    "bai-10": [],
    "bai-11": [],
    "bai-12": [],
    "bai-13": [],
    "bai-14": [],
    "bai-15": [],
    "bai-16": []
  },
  4: {
    "bai-01": [],
    "bai-02": [],
    "bai-03": [['trắc nghiệm đúng sai', 'ds.html'], "lala.html"],
    "bai-04": [],
    "bai-05": [],
    "bai-06": [],
    "bai-07": [],
    "bai-08": [],
    "bai-09": [],
    "bai-10": [],
    "bai-11": [],
    "bai-12": [],
    "bai-13": [],
    "bai-14": [],
    "bai-15": [],
    "bai-16": []
  },
  5: {
    "bai-01": [],
    "bai-02": [],
    "bai-03": [['trắc nghiệm đúng sai', 'ds.html'], "lala.html"],
    "bai-04": [],
    "bai-05": [],
    "bai-06": [],
    "bai-07": [],
    "bai-08": [],
    "bai-09": [],
    "bai-10": [],
    "bai-11": [],
    "bai-12": [],
    "bai-13": [],
    "bai-14": [],
    "bai-15": [],
    "bai-16": []
  },
  6: {
    "bai-01": [],
    "bai-02": [],
    "bai-03": [],
    "bai-04": [
      ['5 Câu trắc nghiệm',
      '5cau_trac_nghiem.html']
      ],
    "bai-05": [],
    "bai-06": [],
    "bai-07": [],
    "bai-08": [],
    "bai-09": [],
    "bai-10": [],
    "bai-11": [],
    "bai-12": [],
    "bai-13": [],
    "bai-14": [],
    "bai-15": [],
    "bai-16": [],
    "bai-17": []
  },
  7: {
    "bai-01": [],
    "bai-02": [],
    "bai-03": [],
    "bai-04": [],
    "bai-05": [],
    "bai-06": [],
    "bai-07": [],
    "bai-08": [],
    "bai-09": [],
    "bai-10": [],
    "bai-11": [],
    "bai-12": [],
    "bai-13": [],
    "bai-14": [],
    "bai-15": [],
    "bai-16": []
  },
  8: {
    "bai-01": [],
    "bai-02": [],
    "bai-03": [],
    "bai-04": [],
    "bai-05": [
        ['5 Câu trắc nghiệm','5cau_trac_nghiem.html']
      ],      
    "bai-06": [],
    "bai-07": [],
    "bai-08": [],
    "bai-09": [],
    "bai-10": [],
    "bai-11": [],
    "bai-12": [],
    "bai-13": [],
    "bai-14": [],
    "bai-15": [],
    "bai-16": []
  },
  9: {
    "bai-01": [],
    "bai-02": [],
    "bai-03": [],
    "bai-04": [],
    "bai-05": [
      ['5 Câu trắc nghiệm','5cau_trac_nghiem.html']
      ],
    "bai-06": [],
    "bai-07": [],
    "bai-08": [],
    "bai-09": [],
    "bai-10": [],
    "bai-11": [],
    "bai-12": [],
    "bai-13": [],
    "bai-14": [],
    "bai-15": [],
    "bai-16": [],
    "bai-17": []
  }
};

const GRADE_TITLES = {
  3: [
    "Thông tin và quyết định",
    "Xử lí thông tin",
    "Máy tính và em",
    "Làm việc với máy tính",
    "Sử dụng bàn phím",
    "Khám phá thông tin trên Internet",
    "Sắp xếp để dễ tìm",
    "Sơ đồ hình cây. Tổ chức thông tin trong máy tính",
    "Thực hành với tệp và thư mục trong máy tính",
    "Bảo vệ thông tin khi dùng máy tính",
    "Bài trình chiếu của em",
    "Tìm hiểu về thế giới tự nhiên",
    "Luyện tập sử dụng chuột",
    "Em thực hiện công việc như thế nào",
    "Công việc được thực hiện theo điều kiện",
    "Công việc của em và sự trợ giúp của máy tính"
  ],
  4: [
    "Phần cứng và phần mềm máy tính",
    "Gõ bàn phím đúng cách",
    "Thông tin trên trang web",
    "Tìm kiếm và trao đổi thông tin",
    "Thao tác với tệp và thư mục",
    "Sử dụng phần mềm khi được phép",
    "Tạo bài trình chiếu",
    "Định dạng văn bản trên trang chiếu",
    "Hiệu ứng chuyển trang",
    "Phần mềm soạn thảo văn bản",
    "Chỉnh sửa văn bản",
    "Thực hành đa phương tiện / Phần mềm luyện gõ bàn phím",
    "Chơi với máy tính",
    "Khám phá môi trường lập trình trực quan",
    "Tạo chương trình máy tính để diễn tả ý tưởng",
    "Chương trình của em"
  ],
  5: [
    "Em có thể làm gì với máy tính?",
    "Tìm kiếm thông tin trên website",
    "Tìm kiếm thông tin trong giải quyết vấn đề",
    "Cây thư mục",
    "Bản quyền nội dung thông tin",
    "Định dạng kí tự và bố trí hình ảnh trong văn bản",
    "Thực hành soạn thảo văn bản",
    "Làm quen với phần mềm đồ họa / Làm sản phẩm thủ công theo video hướng dẫn",
    "Sử dụng phần mềm đồ họa tạo sản phẩm số / Thực hành tạo đồ dùng gia đình theo video hướng dẫn",
    "Cấu trúc tuần tự",
    "Cấu trúc lặp",
    "Thực hành sử dụng lệnh lặp",
    "Cấu trúc rẽ nhánh",
    "Sử dụng biến trong chương trình",
    "Sử dụng biểu thức trong chương trình",
    "Từ kịch bản đến chương trình"
  ],
  6: [
    "Thông tin và dữ liệu",
    "Xử lý thông tin",
    "Thông tin trong máy tính",
    "Mạng máy tính",
    "Internet",
    "Mạng thông tin toàn cầu",
    "Tìm kiếm thông tin trên Internet",
    "Thư điện tử",
    "An toàn thông tin trên Internet",
    "Sơ đồ tư duy",
    "Định dạng văn bản",
    "Trình bày thông tin ở dạng bảng",
    "Thực hành: Tìm kiếm và thay thế",
    "Thực hành tổng hợp: Hoàn thiện Sổ lưu niệm",
    "Thuật toán",
    "Cấu trúc điều khiển",
    "Chương trình máy tính"
  ],
  7: [
    "Thiết bị vào - ra",
    "Phần mềm máy tính",
    "Quản lí dữ liệu trong máy tính",
    "Mạng xã hội và một số kênh trao đổi thông tin trên Internet",
    "Ứng xử trên mạng",
    "Làm quen với phần mềm bảng tính",
    "Tính toán tự động trên bảng tính",
    "Công cụ hỗ trợ tính toán",
    "Trình bày bảng tính",
    "Hoàn thiện bảng tính",
    "Tạo bài trình chiếu",
    "Định dạng đối tượng trên trang chiếu",
    "Thực hành tổng hợp: Hoàn thiện bài trình chiếu",
    "Thuật toán tìm kiếm tuần tự",
    "Thuật toán tìm kiếm nhị phân",
    "Thuật toán sắp xếp"
  ],
  8: [
    "Lược sử công cụ tính toán",
    "Thông tin trong môi trường số",
    "Thực hành: Khai thác thông tin số",
    "Đạo đức và văn hóa trong sử dụng công nghệ kĩ thuật số",
    "Sử dụng bảng tính giải quyết bài toán thực tế",
    "Sắp xếp và lọc dữ liệu",
    "Trình bày dữ liệu bằng biểu đồ",
    "Làm việc với danh sách dạng liệt kê và hình ảnh trong văn bản / Phần mềm chỉnh sửa ảnh",
    "Tạo đầu trang, chân trang cho văn bản / Thay đổi khung hình, kích thước ảnh",
    "Định dạng nâng cao cho trang chiếu / Thêm văn bản, tạo hiệu ứng cho ảnh",
    "Sử dụng bản mẫu tạo bài trình chiếu / Thực hành tổng hợp",
    "Từ thuật toán đến chương trình",
    "Biểu diễn dữ liệu",
    "Cấu trúc điều khiển",
    "Gỡ lỗi",
    "Tin học với nghề nghiệp"
  ],
  9: [
    "Thế giới kĩ thuật số",
    "Thông tin trong giải quyết vấn đề",
    "Thực hành: Đánh giá chất lượng thông tin",
    "Một số vấn đề pháp lí về sử dụng dịch vụ Internet",
    "Tìm hiểu phần mềm mô phỏng",
    "Thực hành: Khai thác phần mềm mô phỏng",
    "Trình bày thông tin trong trao đổi và hợp tác",
    "Thực hành: Sử dụng công cụ trực quan trình bày thông tin trong trao đổi và hợp tác",
    "Sử dụng công cụ xác thực dữ liệu / Các chức năng chính của phần mềm làm video",
    "Sử dụng hàm COUNTIF / Chuẩn bị dữ liệu và dựng video",
    "Sử dụng hàm SUMIF / Thực hành: Dựng video theo kịch bản",
    "Sử dụng hàm IF / Hoàn thành việc dựng video",
    "Hoàn thiện bảng tính quản lí tài chính gia đình / Biên tập và xuất video",
    "Giải quyết vấn đề",
    "Bài toán tin học",
    "Thực hành: Lập chương trình máy tính",
    "Tin học và thế giới nghề nghiệp"
  ]
};

/* ── Pretty file name (fallback) ────────────────────────── */
function prettyName(filename) {
  if (typeof filename !== 'string') return '';
  return filename
    .replace(/\.html?$/i, '')
    .replace(/[-_()\[\]]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ── Chuẩn hóa thông tin bài học [tên hiển thị, tên file] ─── */
function getLessonInfo(item) {
  if (!item) return null;
  if (Array.isArray(item)) {
    if (item.length === 0) return null;
    const label = item[0] !== undefined && item[0] !== null ? String(item[0]).trim() : '';
    const file = item[1] !== undefined && item[1] !== null ? String(item[1]).trim() : label;
    if (!file && !label) return null;
    return {
      displayName: label || prettyName(file) || file,
      fileName: file || label
    };
  }
  if (typeof item === 'string') {
    const file = item.trim();
    if (!file) return null;
    return {
      displayName: prettyName(file) || file,
      fileName: file
    };
  }
  return null;
}

/* ── Build a file sub-link ───────────────────────────────── */
function makeFileLink(grade, baiName, item) {
  const info = getLessonInfo(item);
  if (!info) return null;

  const a = document.createElement('a');
  a.className = 'file-link';
  a.href = `./tin-hoc-${grade}/${baiName}/${encodeURIComponent(info.fileName)}`;
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', info.displayName);

  a.textContent = info.displayName;
  return a;
}

/* ── Render list of files inside an open bai ─────────────── */
function renderBaiFiles(filesEl, grade, baiName) {
  const rawFiles = (GRADE_DATA[grade] || {})[baiName] || [];
  const validFiles = rawFiles.map(getLessonInfo).filter(Boolean);
  filesEl.innerHTML = '';

  if (validFiles.length === 0) {
    const empty = document.createElement('span');
    empty.className = 'file-empty';
    empty.textContent = 'Chưa có bài học nào.';
    filesEl.append(empty);
  } else {
    validFiles.forEach(info => {
      const link = makeFileLink(grade, baiName, [info.displayName, info.fileName]);
      if (link) filesEl.append(link);
    });
  }
  filesEl.dataset.rendered = '1';
}

/* ── Accordion toggle ───────────────────────────────────── */
function toggleBai(toggleEl, filesEl, grade, baiName) {
  const expanded = toggleEl.getAttribute('aria-expanded') === 'true';

  toggleEl.setAttribute('aria-expanded', String(!expanded));
  filesEl.classList.toggle('open', !expanded);
  filesEl.parentElement.classList.toggle('is-open', !expanded);

  if (!expanded) {
    renderBaiFiles(filesEl, grade, baiName);
  }
}

/* ── Build one bai-group ─────────────────────────────────── */
function makeBaiGroup(baiName, grade) {
  const num = parseInt(baiName.replace('bai-', ''), 10);
  const rawFiles = (GRADE_DATA[grade] || {})[baiName] || [];
  const validCount = rawFiles.filter(item => getLessonInfo(item) !== null).length;
  const label = `${num}. ${GRADE_TITLES[grade][num - 1]}`;

  const group = document.createElement('div');
  group.className = 'bai-group';
  group.dataset.bai = baiName;
  group.dataset.grade = String(grade);
  group.dataset.search = `bai ${num} lop ${grade} lesson ${num} grade ${grade}`;

  const toggle = document.createElement('button');
  toggle.className = 'bai-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', `${label}, Lớp ${grade}`);

  const titleSpan = document.createElement('span');
  titleSpan.className = 'bai-title';
  titleSpan.textContent = label;
  titleSpan.title = label;

  const fileCount = document.createElement('span');
  fileCount.className = 'bai-file-count';
  fileCount.setAttribute('aria-hidden', 'true');
  fileCount.textContent = validCount > 0 ? `(${validCount})` : '';

  toggle.append(titleSpan, fileCount);

  const filesEl = document.createElement('div');
  filesEl.className = 'bai-files';

  toggle.addEventListener('click', () => toggleBai(toggle, filesEl, grade, baiName));

  group.append(toggle, filesEl);
  return group;
}

/* ── Build a grade card ──────────────────────────────────── */
function createGradeCard(grade) {
  const card = document.createElement('section');
  card.className = 'grade-card';
  card.id = `card-grade-${grade}`;
  card.dataset.grade = grade;
  card.setAttribute('aria-label', `Lớp ${grade}`);

  const header = document.createElement('div');
  header.className = 'grade-header';

  const numBadge = document.createElement('span');
  numBadge.className = 'grade-num';
  numBadge.textContent = grade;

  const lbl = document.createElement('span');
  lbl.textContent = `LỚP ${grade}`;

  header.append(numBadge, lbl);

  const list = document.createElement('div');
  list.className = 'lesson-list';

  const baiNames = Object.keys(GRADE_DATA[grade] || {}).sort((a, b) => a.localeCompare(b, 'vi'));
  if (baiNames.length === 0) {
    const p = document.createElement('p');
    p.style.cssText = 'padding:10px 6px;font-size:.78rem;color:var(--text2)';
    p.textContent = 'Chưa có bài học.';
    list.append(p);
  } else {
    baiNames.forEach(bn => list.append(makeBaiGroup(bn, grade)));
  }

  card.append(header, list);
  return card;
}

/* ── Render all grade cards ──────────────────────────────── */
function renderAllGrades() {
  gradeGrid.innerHTML = '';
  for (let g = 3; g <= 9; g++) {
    const card = createGradeCard(g);
    card.hidden = (cap === '1' && g > 5) || (cap === '2' && g < 6);
    gradeGrid.append(card);
  }
  updateCount();
}

/* ── Count ───────────────────────────────────────────────── */
function updateCount() {
  const cards = gradeGrid.querySelectorAll('.grade-card:not([hidden])');
  const groups = gradeGrid.querySelectorAll('.bai-group:not([hidden])');
  countLabel.textContent = `${groups.length} bài học · ${cards.length} lớp`;
}

/* ── Theme ───────────────────────────────────────────────── */
function applyTheme() {
  html.dataset.theme = isDark ? 'dark' : 'light';
  iconSun.style.display = isDark ? 'none' : '';
  iconMoon.style.display = isDark ? '' : 'none';
  themeBtn.title = isDark
    ? 'Chế độ Sáng'
    : 'Chế độ Tối';
}

/* ── Events ──────────────────────────────────────────────── */
searchBox.addEventListener('click', () => { window.location.href = 'https://www.google.com.vn/'; });
searchBox.addEventListener('keydown', e => { if (e.key === 'Enter') window.location.href = 'https://www.google.com.vn/'; });

themeBtn.addEventListener('click', () => {
  isDark = !isDark; applyTheme();
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (_) { }
});

fsBtn.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (_) { }
});
document.addEventListener('fullscreenchange', () => {
  const full = Boolean(document.fullscreenElement);
  iconExpand.style.display = full ? 'none' : '';
  iconCollapse.style.display = full ? '' : 'none';
  fsBtn.setAttribute('aria-label', full
    ? 'Thoát toàn màn hình'
    : 'Bật toàn màn hình');
});

/* ── Init ────────────────────────────────────────────────── */
(function init() {
  try {
    const saved = localStorage.getItem('theme');
    isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  } catch (_) { }
  applyTheme();
  renderAllGrades();
})();
