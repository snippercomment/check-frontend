import choNguoiBatDau from "../assets/books/cho-nguoi-bat-dau.jpg";
import giaiThichNguPhap from "../assets/books/giai-thich-ngu-phap.jpg";
import nguPhapMaiPhuong from "../assets/books/ngu-phap-vu-thi-mai-phuong.jpg";
import tuHocChoNguoiMoi from "../assets/books/tu-hoc-cho-nguoi-moi.jpg";

const textbooks = [
    {
        id: 1,
        name: "Giải Thích Ngữ Pháp Tiếng Anh",
        author: "Mai Lan Hương, Hà Thanh Uyên",
        price: 1010000,
        image: giaiThichNguPhap,
        shortDesc: "Ngữ pháp tiếng Anh từ cơ bản đến nâng cao có bài tập và đáp án.",
        longDesc: `- Giải thích chi tiết các chủ điểm ngữ pháp: thì, câu điều kiện, mệnh đề,...\n- Có bài tập thực hành sau mỗi phần.\n- Dành cho học sinh, sinh viên, người luyện thi.`,
        rating: 4.8,
    },
    {
        id: 2,
        name: "Ngữ Pháp và Giải Thích Ngữ Pháp Tiếng Anh - Tập 1",
        author: "Vũ Thị Mai Phương",
        price: 510000,
        image: nguPhapMaiPhuong,
        shortDesc: "Tài liệu luyện ngữ pháp tiếng Anh cơ bản và nâng cao.",
        longDesc: `- Hệ thống kiến thức theo sơ đồ, dễ nhớ.\n- Bổ sung mẹo làm bài, chiến lược luyện thi.\n- Tái bản có chỉnh sửa và cập nhật mới.`,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Tiếng Anh Cho Người Bắt Đầu",
        author: "Nguyễn Thanh Loan",
        price: 130000,
        image: choNguoiBatDau,
        shortDesc: "Sách học từ đầu dành cho người mất gốc tiếng Anh.",
        longDesc: `- Giới thiệu phát âm, từ vựng và cấu trúc câu cơ bản.\n- Có ví dụ minh họa và bài tập luyện.\n- Phù hợp với người mới bắt đầu hoặc tự học tại nhà.`,
        rating: 4.5,
    },
    {
        id: 4,
        name: "Tự Học Tiếng Anh Cho Người Mới Bắt Đầu",
        author: "The Windy",
        price: 125000,
        image: tuHocChoNguoiMoi,
        shortDesc: "Giáo trình tự học hiệu quả cho người mới bắt đầu.",
        longDesc: `- Chủ đề thực tế: chào hỏi, giới thiệu, giao tiếp cơ bản,...\n- Có CD/audio và phần dịch giúp dễ hiểu.\n- Sách trình bày rõ ràng, dễ học cho mọi lứa tuổi.`,
        rating: 4.6,
    },
];

export default textbooks;
