// Lấy đối tượng HTML chứa văn bản
const element = document.getElementById("root");

// Lấy nội dung văn bản
const text = element.innerText;

// Tạo đối tượng Blob từ văn bản
const blob = new Blob([text], { type: "text/plain" });

// Tạo URL từ đối tượng Blob
const url = URL.createObjectURL(blob);

// Mở trang web mới với đối tượng Blob
window.open(url);
