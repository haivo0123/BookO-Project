/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  Search, 
  ShoppingCart, 
  ChevronRight, 
  Bolt, 
  Star, 
  ArrowLeft, 
  ArrowRight, 
  Ticket, 
  Truck, 
  Award, 
  BookOpen, 
  Facebook, 
  Instagram,
  CreditCard,
  Building2,
  Wallet,
  Filter,
  Clock,
  Mail,
  RefreshCw,
  LayoutGrid,
  Book,
  TrendingUp,
  Brain,
  Baby,
  Languages,
  ChevronLeft,
  List,
  Heart,
  User,
  UserCircle,
  IdCard,
  MapPin,
  Lock,
  LogOut,
  ShieldCheck,
  Headphones,
  Check,
  Handshake,
  History,
  ChevronDown,
  Truck as TruckIcon,
  CheckCircle2,
  XCircle,
  X,
  ShoppingBasket,
  Eye,
  EyeOff,
  LayoutDashboard,
  Bell,
  HelpCircle,
  Edit3,
  Trash2,
  Plus,
  Users,
  BarChart3,
  Settings,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

const FEATURED_BOOKS = [
  {
    id: 1,
    title: "Tư Duy Phản Biện Trong Kỷ Nguyên Số",
    author: "Nguyễn Văn A",
    price: 145000,
    oldPrice: 220000,
    discount: "-35%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwFW_JtEu9MTSWAyfy24gtk_wPMaFJUtEpFKDu6-I4wA4VC4sJmYw2C-RL66qiBVr1Oy7B8rkWDe_SKVtqXJa0p38SLsnYVJLrQiUPHYgzIP1IN3sKDPqHA_X4Jf7Ry-W0YmoZ4C98WL0gFXo9-iwC_M3ViOxtzDFt31NDvBSHntjRPBoDvh6xVJRQwWfdGUqhsiPl6FGDOc9Q4dKu6PCEFrXCKfWLliC6R0bbv8Jx8M9GSV87rre4QJun1UmVXsi8ewkYNPWYtgE"
  },
  {
    id: 2,
    title: "Bí Mật Của Sự Tập Trung Cao Độ",
    author: "Trần Thị B",
    price: 110000,
    oldPrice: 138000,
    discount: "-20%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVIgMy06xTcT9_jXpnkRl58JQiDUX4hpYUGfSu1uf5797kipMGN4fjc_N89M4qJoesKSeTmUxW-Gsg1mBKgAtOKByfxUBTwp_8jK_Z2xEG3H1SvL3RffUp_5VR9hx3g5tqlXDJNf_FmJyB2IDPHex3S3B3E4URWV-Bb5i6YOzReNVMfdIqdI3gmHBMRj1jHgSn3Ic2ZH17NZdbF3as7FU_elA7yqghykjL-Lpy5HSOVAj_ypI4ie5ClmSNOnYKeHXuvkT77r1RyRw"
  },
  {
    id: 3,
    title: "Kinh Tế Học Cho Mọi Người",
    author: "Phạm Hùng C",
    price: 89000,
    oldPrice: 178000,
    discount: "-50%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXK4uskMnKMNWNQV5Y0dM1gVddauyTusqWbqEBULDq5wikgfUp91IyST3wa9_k-238hpsucUkLWkBOqGvWw39fMfhWFONSAQgU4BSKsv4H_QBjZoBL5bv-bfytCXruWb_xe1erLxxazhrfK8VA8O6lp1pihYw9d3BtB7c_9bLFtmah-JTcwezvpGcxP4efIqcXEp36dOsxRYxU-5nKdpfdn0-zScp2P6hk_3cTU4XKsz_9vzse0TaMKCyuxUmGwBkA1PBKVTuG5vM"
  },
  {
    id: 4,
    title: "Thiết Kế Cuộc Đời Thịnh Vượng",
    author: "Lê Minh D",
    price: 153000,
    oldPrice: 180000,
    discount: "-15%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-jhrvWq_5UnfI-QZZ-z5mNZPHGRF1CRTLI-nEf4kpu_S4QrRcmz0uO1kbpcPUvtKaE8h2TvrrYs1EN1e-cduv-qi8mQdfhWmJtHvULvos6ShsxPvm5Vlk4jJ5PyOWptmvWSFmehvC08WY35EFgAXb79mxFWKlpai8kKVNc6e-2Wllm8RoGulaAl1B2tnXwyF-cUOfGhd9kpabYDvqfufOeoB9DxugZNC8CvBLzympCDVOIw6UrpdD-XCPWOGU3D9bulNZJt0uwc"
  },
  {
    id: 5,
    title: "Nghệ Thuật Giao Tiếp Đỉnh Cao",
    author: "Dale Carnegie",
    price: 78000,
    oldPrice: 87000,
    discount: "-10%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAltvZ0mG8L-1pp98RSKqXmeUzVf6ADljN0i8Bz05SE0Bh9GevIUP1EceJeqiMvpH6d9Kwh2E3TqpAAU6FyOIGiG-W68Oa4kgaRK4FPp1rzT8gvbltk6EpnDc14OTrESDOlcW0vQ5HJnQWuOLVsooDOc_EHDxx6xgaeoBwjo-46x4BZeVEJW8ck4kKVlQmUHFASQh9z2MAcJrUSBlITGHJuNVxvVSzi46PjDq4zI4_-2jOAljyNwfjWPodxV9MfDIei8t6tinz4AHs"
  }
];

const BEST_SELLERS = [
  {
    id: 1,
    title: "Harry Potter và Hòn Đá Phù Thủy",
    author: "J.K. Rowling",
    price: 195000,
    rating: 4.9,
    sold: "2.5k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9J73Wjd67OsNQTwn-EtH7aqN4nSbFa_SL7CZ5CckZdE7gSG_x1kPw5c8b8_KD7cKWDPneUgH6_nOs7YinvOM-nz4JlNEnS7WwoPfV0A9MSm9Ui5B9HETFcGTC51zcj045AIUKuLPggdNKGOVS7s06q8Ma4QXQFLAS2sY4YpHOjNVK87XO1WetetocYe5dUqveFJRF3iM2Pc3G4ZWKfFXk2gUrtZxDYe41mpgwhZ3JTlXY9oSvF2JbjIQvg_LyGqFD4vr8dZnaLCM"
  },
  {
    id: 2,
    title: "Lược Sử Thời Gian",
    author: "Stephen Hawking",
    price: 120000,
    rating: 4.8,
    sold: "1.1k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJraeqIB6VztDSK98U9Kle6e43oh9cmNfeNaZfaKqWkxPLS4UxbLd7GSETBAbepsfjwRDH5e0xbpl2mgYDnKZGHC1C1Jkan8kzXDrXfBl5DQd-nZm010XTn4GIAKHEN6Z4fznFE994DHqfJLZAIDiD5EfN2cOPRCRfLoI52Rx4z3CU5KGuUgkXhpuB9b5bb6ySkVqXOjkZypnpVr1IIGmHhYPqMx-cLJiVedwvTzYMwWraLIKHI3uItLy2ohiZx-T-bezSBRUa4RI"
  },
  {
    id: 3,
    title: "Truyện Kiều (Ấn bản mới)",
    author: "Nguyễn Du",
    price: 85000,
    rating: 5.0,
    sold: "500+",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9qyN0iOy9_A7tywQMskBgeqNK85Gc77_e8Oq4Qtpvsl7w8VgSK_2OLFRD-0rB4yZkc3DeZaeCqIpzomKYeiNcJJtWtjyOGLu0m5Ip8K2W5kZ40aYbV4m-4KtDHPa69DoPJvEUIyqZNtEaT8OUpl9o6ZI7hCXgKXBOmlqxHU47IJNla2fwX6fF10P7G5UYsVedUptZBAIKnXtIj57Wuz2-ahfLZxNKcGFqIC0zbQcfBrfx0t04hu7_N2sd0NcYFtoEV3lQ4qi9iMk"
  },
  {
    id: 4,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: 65000,
    rating: 4.9,
    sold: "10k+",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIfHzJQxTPNbZz-H5f1A_lvvsLoUOfTShD2YuN7q_n-lvqA7dnL4i7Og3BT-fk8WTKBhmbHaNb34xz7BlfGzB3ypovP_wb_RKymTBfky2UaRoRqLoMfuNoAbzQPqSNXwuM6hPEQUON8kD6FeSfx7yHiTtWREUuJnEQMbuYFC-TSFmauu5PgetEjG02Prrk2RY8JuVJJGTeucJZEJCZ6NEWtinFRHXvSgHSuW8YWcUChiwRiLRB4BUnLbDTrYPLfZOdfFphLhlvGF0"
  },
  {
    id: 5,
    title: "Khởi Nghiệp Tinh Gọn",
    author: "Eric Ries",
    price: 168000,
    rating: 4.7,
    sold: "2.2k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN79AcKIvzJASxRUIza93q7q_5ZZWG11mPxhrMzmOKSygqh0PkzhACfDUEnZXZp5VuEcv64B8TFhlWgzDXU3rGZsjPdfU4ydhvDbqvDila-iXkKhFh1xfiralqjdHK9x0USVnsAVkd-gTcSdPGVrbofOwYm1_cjf1GjO4ZkwG2oTMNnYeNrN00LUlkgv6YDm8sz9r7adB5yNbPupwkRy7AAuZlY0RoRwVq4P11JCPwJ5lK7FZXhbaNNk4dZu_0Pd7ijSYzVPUBJ_E"
  },
  {
    id: 6,
    title: "Muôn Kiếp Nhân Sinh",
    author: "Nguyên Phong",
    price: 188000,
    rating: 4.9,
    sold: "4.8k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUD-JJMPCrDJOc06Qzm8B-1oPRH9kyJQsrYzqI3iONRqvWf9PIHJ14emnnun3ufW9n3QLfni3SlJxRSVWyKMJ41xWSmKkgXxSvXlxpGA30or53H-o-ET3WJt6R1c2u2bVlu9x85v4-LtVWFRcqGxM0l33jO-Op01orMCsuy-zr3kpK29l01BayJmMPQ9OZMBxTU5t0Y4vssKsUQSraKpCv3xeKLpW72J_If9TSBjiLojSGErJja_zMqj8W3_b_-z78UE0NGVYVjYE"
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

const NEW_ARRIVALS = [
  {
    id: 1,
    title: "Thao túng tâm lý",
    author: "Shannon Thomas",
    price: 150000,
    oldPrice: 190000,
    image: "https://picsum.photos/seed/book1/300/400"
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: 85000,
    oldPrice: 110000,
    image: "https://picsum.photos/seed/book2/300/400"
  },
  {
    id: 3,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: 79000,
    oldPrice: 95000,
    image: "https://picsum.photos/seed/book3/300/400"
  },
  {
    id: 4,
    title: "Cây cam ngọt của tôi",
    author: "José Mauro de Vasconcelos",
    price: 105000,
    oldPrice: 125000,
    image: "https://picsum.photos/seed/book4/300/400"
  },
  {
    id: 5,
    title: "Hành trình về phương Đông",
    author: "Baird T. Spalding",
    price: 120000,
    oldPrice: 150000,
    image: "https://picsum.photos/seed/book5/300/400"
  },
  {
    id: 6,
    title: "Muôn kiếp nhân sinh",
    author: "Nguyên Phong",
    price: 168000,
    oldPrice: 220000,
    image: "https://picsum.photos/seed/book6/300/400"
  },
  {
    id: 7,
    title: "Lược sử loài người",
    author: "Yuval Noah Harari",
    price: 195000,
    oldPrice: 250000,
    image: "https://picsum.photos/seed/book7/300/400"
  },
  {
    id: 8,
    title: "Tâm lý học tội phạm",
    author: "Stanton Samenow",
    price: 145000,
    oldPrice: 185000,
    image: "https://picsum.photos/seed/book8/300/400"
  },
  {
    id: 9,
    title: "Sói Già Phố Wall",
    author: "Jordan Belfort",
    price: 180000,
    oldPrice: 210000,
    image: "https://picsum.photos/seed/book9/300/400"
  },
  {
    id: 10,
    title: "Tư Duy Nhanh và Chậm",
    author: "Daniel Kahneman",
    price: 225000,
    oldPrice: 280000,
    image: "https://picsum.photos/seed/book10/300/400"
  }
];

const PROMO_BEST_SELLERS = [
  { id: 1, title: "Harry Potter", price: 195000, discount: "-25%", image: "https://picsum.photos/seed/hp/300/300" },
  { id: 2, title: "Lược Sử Thời Gian", price: 120000, discount: "-30%", image: "https://picsum.photos/seed/sh/300/300" },
  { id: 3, title: "Truyện Kiều", price: 85000, discount: "-45%", image: "https://picsum.photos/seed/tk/300/300" },
  { id: 4, title: "Đắc Nhân Tâm", price: 65000, discount: "-15%", image: "https://picsum.photos/seed/dnt/300/300" },
  { id: 5, title: "Khởi Nghiệp Tinh Gọn", price: 168000, discount: "-20%", image: "https://picsum.photos/seed/ls/300/300" },
  { id: 6, title: "Muôn Kiếp Nhân Sinh", price: 188000, discount: "-10%", image: "https://picsum.photos/seed/mkns/300/300" },
];

const CATEGORY_BOOKS = [
  {
    id: 1,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: 125000,
    rating: 4.8,
    category: "Văn học",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnujgli7V2tGwEdtScuNBM6BF_cQp8T-SoGrNPHibu73EY1B_FdU7vPuS2fxbNfanozXVXaJBFckiTO0mMIPVfwLXvCOV07hP2HDfsxj2rKEUn4L9pzwvIBs8Q1DTZiial3dt58r7oCQLXvnpfSSPf8W3MN0L9p8AzCOBqB2Lwl_mVyEpBNnPJIB_ZHCnYj9ikJ5wThEhdi5uG530deIrQBcRi4668mgf7zy6Zsxlzm9wUEYOOVEudbQ8MUDuTT0uNNFYV6dMqNf4"
  },
  {
    id: 2,
    title: "Tư Duy Nhanh Và Chậm",
    author: "Daniel Kahneman",
    price: 210000,
    rating: 4.5,
    category: "Kinh tế",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkp-LqXrRWRC8pmTWfOLmrNFbFmoy6L5aAtNqlZRJfDk1SzOGG2vhi-4EGi0GYZK_YkDvsKArTH5yrt1Eclwn5Pr8OHtNm9v04TQW4e4_zYrhSZnqr0Z0BxSZ2bzdVogDDZuCfm1tUZJNEofQE6XOaKe8fpXYHNix5oidfafEewFTnKeAQjGq-m5NR3nghgVG6twZ-NKIPy73P8mQDxys6uF6okkwxA3AoJa4ilFRUfZuR1sUPXNo9kG2N2rmn4pWFfohR1O4priw"
  },
  {
    id: 3,
    title: "Làm Chủ Tư Duy, Thay Đổi Vận Mệnh",
    author: "Adam Khoo",
    price: 175000,
    rating: 4.7,
    category: "Kỹ năng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrNwZ2Lf0FyMqszVrH8vy3pb-ZAty7ABjPgt43hCoug-QvS2ZPT5v-HPvFbsTRuAAtUKwT2EnNe6GavEwE_RjKxiC2vV1hJmf1cDC312jpi_T0JexmaBy7QWbeXVaDpDIPvYf4ot9HtzpVNULyuQR-4L-S1WzWEhpCAtvwDsO3pR2Sar_AIV2A_U8JRsP5hsPVY9HeuCZlp3zFws-6v5Y9VTQz59fs-o3_I6SETMoMJaed1d47XTRQKrzyFbRazvurP56MIs45PcU"
  },
  {
    id: 4,
    title: "Mắt Biếc",
    author: "Nguyễn Nhật Ánh",
    price: 99000,
    rating: 4.9,
    category: "Văn học",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkXC0pCRTwX28eqySv1_yVEin1kapi3inXyNO0dIQ_yuJ3lqEF-5bd9FoElxU_1dKx-OLE_J9hJq0KYAkgI7aZFz_PjENB4STlyTNnyuorGhJCQzAKCM-fN5oqIq7d1sgYUDVg2ZW0R8rtHehW4uCkiQ_eb8N2KbAbywWZaEH6qvCjCU58a7Kw7qu9arktiFysUUAgNZ36lW1yOrIEnseC-NNZuVpin4RizEcuT5YXnXS4tAbMlZu3RLUxwFFDAXh4bKwBeEki8Gs"
  },
  {
    id: 5,
    title: "Cha Giàu Cha Nghèo",
    author: "Robert Kiyosaki",
    price: 150000,
    rating: 4.6,
    category: "Kinh tế",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9_exVFy6CcT5PnDuTz23PVLJLL5m2eeqCse7YTZyxbzSOUk38t4rDLJvJq8xNd5Q2x0ale8-6BA6xDWetFoiUfMP7ierOp9yNXn2EJO8RCkCO_DCsrlicz22KJDmnxBDdTmULVdLVnw_qE9zqVB3AHr-Ib75ERhHvYF2kzPIBovgYyCDx8m8ercPEnZ6bpdL9xEJEtmJcH4tm_F3U9XfxyD943dAsLPc2PEJWOL4ypemkWr_Ch3_pY3J5zU0oGdUQ-rZig9vsVeI"
  },
  {
    id: 6,
    title: "Harry Potter Tập 1",
    author: "J.K. Rowling",
    price: 245000,
    rating: 5.0,
    category: "Thiếu nhi",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN6FnV5p2n9M5RdfX7yMAZ3-iDA9yBUNaADPY-pJpqSoHSJM66MvLOzbfzKRqVn1x64kIDR6-H_vZVq0KwEso5K10ne7UGlkz8VDGJR3cTXgT1bjq0PlSJ_5J1qIQ9haUjLqtOZrfADtYC53sbF0VuIAFWsvSAp55sRfHS6PutWUnUJWAaOhg2JEekIUT4mR7FeZFeEMDVg2pUpNynqr0sAwcY-IYAM8MjAyC3t_bgEsuv6E-i8EC0lQEcboQV9u2X2kQvHkmoTL0"
  }
];

const CATEGORIES_LIST = [
  { name: "Tất cả sách", icon: LayoutGrid, count: 452, active: true },
  { name: "Văn học", icon: Book, count: 124 },
  { name: "Kinh tế", icon: TrendingUp, count: 86 },
  { name: "Kỹ năng", icon: Brain, count: 52 },
  { name: "Thiếu nhi", icon: Baby, count: 94 },
  { name: "Ngoại ngữ", icon: Languages, count: 31 },
];

const MOCK_USERS = [
  {
    username: 'admin001',
    password: '123a',
    fullName: 'Admin1',
    email: 'admin001@gmail.com',
    address: 'TP. HCM',
    role: 'admin'
  },
  {
    username: 'nguyenvana123',
    password: '123456',
    fullName: 'Nguyễn Văn A',
    email: 'vana@example.com',
    address: '123 Đường ABC, Quận 1, TP. HCM',
    role: 'user'
  }
];

const INITIAL_CART = [
  {
    id: 1,
    title: "Tâm Lý Học Tội Phạm",
    author: "Diệp Hồng Vũ",
    price: 125000,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_SxFYq_9fOAIURD1Z-9DJSl7mMmrQPTTTAKqsNomjEQ04gb6ddcAgRcP9DRghE_EQEvGBUkFacX3cy5b0-DF8OELP1uSUCPjtRZA2xnTCpVpEpcY8YeCEKddiKpqB98zikc66fTNJXGiL2qIAfmR87fGE8QDCH_0xJQwl2sfgn4QPwjlGHHF5Dfj0qCPBpMtif8zUinUfx3ypWPlkNXhfq9cKZ06X_TgWy3yxWimpErcnPzJMi-3YfModOu3TcrpHVrDR8kbExY"
  },
  {
    id: 2,
    title: "Lược Sử Loài Người",
    author: "Yuval Noah Harari",
    price: 210000,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkeK8YFuH-7AHJLXJDx2cyrkS215R-kSLlLIQ3xJ0r8vJrue3kRF9aXJLJqVG3R8yzhV7xG_wfkm0c0-1AvL31gbuku0y-mYIFnh7Vtx_ptMqy_CIvdhkff0KgNL57H3s7ZIPwZrqBwPxhHEOoy6aRw2KhMyDdDorrXZslsrdy-5lpfqQpQnGyEaTWbMitOorNAnoLi7Rs36zvcSOl8uShaVDxnnE71uHFz-AJ-K0lMa0FTXzqYrpdVd-8fZTY3y1EhN-kC6es1_4"
  },
  {
    id: 3,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: 86000,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ma2woD9gGtjvQ2sB3WdrlnwRd6jV_Bh9zz7L3dl3aJtnNHsVziaRYHbIzGlOMyMA-oEg_AxSL5hmb5Ec1PbYN62HdvVQ6ubqQMAnj9DSw7S02dYF5yS056OEvfKkTlHxt26P4RHMJzbsBt_UDjjYLHNLVQKJmU_VljxWDFP6B4DFmyBTc1IM6bORi5LzGg7ggY7vYHtw-EaU1kxVkWAP9pXyMH_gV3awO7lrzswzmuB1v3L_MdPmot_9rKzlzeplJkF8S3up-jk"
  }
];

// Profile Page Component
const ProfilePage = ({ 
  currentUser, 
  setCurrentPage, 
  showProfilePassword, 
  setShowProfilePassword, 
  setShowChangePasswordForm,
  setIsLoggedIn,
  setCurrentUser,
  showChangePasswordForm
}: any) => {
  if (!currentUser) return null;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-8 text-sm font-medium text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#308ce8] transition-colors">Trang chủ</button></li>
          <li className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Tài khoản</span>
          </li>
        </ol>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Thông tin cá nhân</h1>
        <p className="mt-2 text-slate-600">Quản lý và bảo mật thông tin tài khoản của bạn tại BookO.</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="space-y-8">
            {/* Username Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#308ce8]/10 rounded-lg text-[#308ce8]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Tên đăng nhập</h3>
                  <p className="text-lg font-medium text-slate-900">{currentUser.username}</p>
                </div>
              </div>
            </div>

            {/* Full Name Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#308ce8]/10 rounded-lg text-[#308ce8]">
                  <IdCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Họ & Tên</h3>
                  <p className="text-lg font-medium text-slate-900">{currentUser.fullName}</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#308ce8] bg-[#308ce8]/5 hover:bg-[#308ce8]/10 rounded-lg transition-colors">
                Thay đổi
              </button>
            </div>

            {/* Password Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#308ce8]/10 rounded-lg text-[#308ce8]">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Mật khẩu</h3>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-medium text-slate-900">
                      {showProfilePassword ? currentUser.password : '••••••••'}
                    </p>
                    <button 
                      onClick={() => setShowProfilePassword(!showProfilePassword)}
                      className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                    >
                      {showProfilePassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowChangePasswordForm(true)}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#308ce8] bg-[#308ce8]/5 hover:bg-[#308ce8]/10 rounded-lg transition-colors"
              >
                Thay đổi
              </button>
            </div>

            {/* Email Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#308ce8]/10 rounded-lg text-[#308ce8]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email</h3>
                  <p className="text-lg font-medium text-slate-900">{currentUser.email}</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#308ce8] bg-[#308ce8]/5 hover:bg-[#308ce8]/10 rounded-lg transition-colors">
                Thay đổi
              </button>
            </div>

            {/* Address Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#308ce8]/10 rounded-lg text-[#308ce8]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Địa chỉ giao hàng</h3>
                  <p className="text-lg font-medium text-slate-900 leading-snug">{currentUser.address}</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#308ce8] bg-[#308ce8]/5 hover:bg-[#308ce8]/10 rounded-lg transition-colors">
                Thay đổi
              </button>
            </div>
          </div>
        </div>

        {/* Security & Logout Footer */}
        <div className="bg-slate-50 px-6 py-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <button 
              onClick={() => setShowChangePasswordForm(true)}
              className="flex items-center gap-2 text-[#308ce8] font-semibold hover:underline decoration-2 underline-offset-4 transition-all"
            >
              <Lock className="w-5 h-5" />
              Thay đổi mật khẩu
            </button>
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setCurrentUser(null);
                setCurrentPage('home');
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all"
            >
              <LogOut className="w-5 h-5" />
              Đăng xuất
            </button>
          </div>
        </div>
      </div>

      {/* Change Password Modal/Form Overlay */}
      {showChangePasswordForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Thay đổi mật khẩu</h2>
              <button 
                onClick={() => setShowChangePasswordForm(false)}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
              >
                <XCircle className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            <form className="p-6 space-y-5" onSubmit={(e) => { e.preventDefault(); setShowChangePasswordForm(false); alert('Mật khẩu đã được thay đổi thành công!'); }}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mật khẩu cũ</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="password" 
                    required
                    placeholder="Nhập mật khẩu hiện tại"
                    className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#308ce8] outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mật khẩu mới</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="password" 
                    required
                    placeholder="Nhập mật khẩu mới"
                    className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#308ce8] outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Xác nhận mật khẩu mới</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="password" 
                    required
                    placeholder="Nhập lại mật khẩu mới"
                    className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#308ce8] outline-none transition-all"
                  />
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setShowChangePasswordForm(false)}
                  className="flex-1 h-12 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all"
                >
                  Hủy
                </button>
                <button 
                  type="submit"
                  className="flex-[2] h-12 bg-[#308ce8] text-white font-bold rounded-xl shadow-lg shadow-[#308ce8]/20 hover:bg-blue-600 transition-all"
                >
                  Xác nhận
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Account Badges */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-100">
          <ShieldCheck className="w-8 h-8 text-[#308ce8] mb-3" />
          <h4 className="font-bold mb-1">Bảo mật cao</h4>
          <p className="text-xs text-slate-500">Tài khoản của bạn luôn được bảo vệ 24/7</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-100">
          <Truck className="w-8 h-8 text-[#308ce8] mb-3" />
          <h4 className="font-bold mb-1">Giao hàng nhanh</h4>
          <p className="text-xs text-slate-500">Miễn phí vận chuyển cho đơn trên 500k</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-100">
          <Headphones className="w-8 h-8 text-[#308ce8] mb-3" />
          <h4 className="font-bold mb-1">Hỗ trợ 24/7</h4>
          <p className="text-xs text-slate-500">Chúng tôi luôn sẵn sàng lắng nghe bạn</p>
        </div>
      </div>
    </div>
  );
};

const ADMIN_BOOKS = [
  {
    id: 1,
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    category: "Văn học",
    price: 85000,
    stock: 124,
    status: "Còn hàng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOkz8j9Dw5Om26UgJeiWS-PgsnE9P4ayce-smk7rzldm08khn8wwN7W8auYGmct55Ee0Bm12BpC78eSHv362G6RVuckzgZjLiw17Got-cslU0SIh4l_Gft_UrKtmm93l-NtAdDSBZuskIHEE-BDZTAmVgRhK5394rKmnKgxEho0t7ZtD5cjS1SFJFRskkBiqKuQU6QIdaoiuN3MElaHVH_sSHTt1-kzSrEY65wLbCpZMplgxtZcRYdMHtSECCx8AlDPSVszI2ZbUU"
  },
  {
    id: 2,
    title: "Kinh Tế Học Hài Hước",
    author: "Steven D. Levitt",
    category: "Kinh tế",
    price: 142000,
    stock: 0,
    status: "Hết hàng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4gRlY5gRco36d0f45Az1xEewzZkUCVxe5w0NvARGrmK2CqGq8kzuRifycad7HZjbSA-pb-6p9T090n66wcbmfCVb-IHa5FMJ98MCRu_6ViPL3EwoexP1INSu7BNL8oGpy5qde6IVNeSjV4yCGNKku2zRGaFmQtHa-TCnqwkUPgYDIIWogj1uOAWlpkmbE_7mwev3Si97z5eN4zB9ZOh146X442NGF2_b5-hbbWX98RmnK4nXbLu07DdhUVxsloo9SVuezU6qFVQY"
  },
  {
    id: 3,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng",
    price: 76000,
    stock: 56,
    status: "Còn hàng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVUGao5wBoHhQoAdnEVZ-GkjcFwXF0eoBD9cAcuZTK_udF337V2a4CqBg55dtcz2LEn5uD9Kp8vXbkHOnujUQurdKg2aPOB7jUSqqy1_yXcBmWxhsO1W07JCZnonS8nDecRTPPleOZOuxD2h56fMRtn_C01eTdxeyMyzywAa_MNt9nQtVFfgKjfvSlXBB2Q2nY4DfdTMmfbtv0EVdWkFIeffmXqLAyq0izti6GVEWcC4RojOt5uGW8QPhbB5SAbLlw53EmE6rlb-8"
  },
  {
    id: 4,
    title: "Thỏ Và Rùa",
    author: "Ngụ ngôn Aesop",
    category: "Thiếu nhi",
    price: 25000,
    stock: 312,
    status: "Còn hàng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfW1NNdwMXUaOnq0KecPCeKJ5QUfyIm_4zmvxslLKFnYvkV1PPZk8blea13DvXyLsR_i88LfFpWDmY1nPa9EdzkodlY1VVow4E4LvvNE_2w9BVqC7yLvX-h77ge-2qpA-vlMsdehM2RhNQzpVk_Ueeh8lBQSp9lSYcSQ2KDcxK0ffPr6r-ihtQWYOYC-p5lUesZYyPhkIK6gKvlbYNImNBYaMZ4SCMJ8MFD-qcyn-bQufbyzUgLerJ7SG63SHuRBg5AwhQFpvYMVY"
  }
];

// Admin Product Management Component
const AdminProductManagement = ({ currentUser, setCurrentPage, setIsLoggedIn, setCurrentUser, books, setBooks }: any) => {
  const [categoryFilter, setCategoryFilter] = useState('Tất cả thể loại');
  const [statusFilter, setStatusFilter] = useState('Tất cả trạng thái');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingBook, setEditingBook] = useState<any>(null);
  const [deletingBookId, setDeletingBookId] = useState<number | null>(null);
  const [showAddSuccess, setShowAddSuccess] = useState(false);
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: 'Văn học',
    purchasePrice: 0,
    stock: 0
  });

  const filteredBooks = books.filter((book: any) => {
    const matchesCategory = categoryFilter === 'Tất cả thể loại' || book.category === categoryFilter;
    const matchesStatus = statusFilter === 'Tất cả trạng thái' || book.status === statusFilter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const handleDelete = (id: number) => {
    setBooks((prev: any[]) => prev.filter(b => b.id !== id));
    setDeletingBookId(null);
  };

  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    const sellingPrice = Math.round(editingBook.purchasePrice * 1.15);
    const status = editingBook.stock > 0 ? "Còn hàng" : "Hết hàng";
    
    setBooks((prev: any[]) => prev.map(b => b.id === editingBook.id ? { 
      ...editingBook, 
      price: sellingPrice,
      status: status
    } : b));
    setEditingBook(null);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f6f6] font-sans relative">
      {/* Add New Book Modal */}
      {isAddingBook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#ec5b13] text-white">
              <h3 className="text-xl font-bold">Thêm sách mới</h3>
              <button onClick={() => setIsAddingBook(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tên sách</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={newBook.title}
                    onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                    placeholder="Nhập tên sách..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tác giả</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={newBook.author}
                    onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                    placeholder="Nhập tên tác giả..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Thể loại</label>
                  <select 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={newBook.category}
                    onChange={(e) => setNewBook({...newBook, category: e.target.value})}
                  >
                    <option>Văn học</option>
                    <option>Kinh tế</option>
                    <option>Kỹ năng</option>
                    <option>Thiếu nhi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Giá nhập (VNĐ)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={newBook.purchasePrice || ''}
                    onChange={(e) => setNewBook({...newBook, purchasePrice: parseInt(e.target.value) || 0})}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Số lượng kho</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={newBook.stock || ''}
                    onChange={(e) => setNewBook({...newBook, stock: parseInt(e.target.value) || 0})}
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  onClick={() => setIsAddingBook(false)}
                  className="flex-1 px-6 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  Hủy bỏ
                </button>
                <button 
                  onClick={() => {
                    setIsAddingBook(false);
                    setShowAddSuccess(true);
                    setTimeout(() => setShowAddSuccess(false), 3000);
                    setNewBook({
                      title: '',
                      author: '',
                      category: 'Văn học',
                      purchasePrice: 0,
                      stock: 0
                    });
                  }}
                  className="flex-1 px-6 py-3 rounded-xl font-bold text-white bg-[#ec5b13] hover:bg-[#ec5b13]/90 transition-all shadow-lg shadow-[#ec5b13]/25"
                >
                  Thêm sách
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingBookId !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden p-8 text-center"
          >
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Xác nhận xóa?</h3>
            <p className="text-slate-500 font-medium mb-8">
              Bạn có chắc chắn muốn xóa cuốn sách này? Hành động này không thể hoàn tác và dữ liệu sẽ bị xóa vĩnh viễn.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setDeletingBookId(null)}
                className="flex-1 px-6 py-4 rounded-2xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                Hủy bỏ
              </button>
              <button 
                onClick={() => handleDelete(deletingBookId)}
                className="flex-1 px-6 py-4 rounded-2xl font-bold text-white bg-red-500 hover:bg-red-600 transition-all shadow-lg shadow-red-500/25"
              >
                Xác nhận xóa
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Success Toast */}
      {showAddSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-[70] bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold"
        >
          <CheckCircle2 className="w-6 h-6" />
          <span>Thêm sách mới thành công!</span>
          <button onClick={() => setShowAddSuccess(false)} className="ml-4 hover:bg-white/20 rounded-full p-1">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Edit Modal */}
      {editingBook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#ec5b13] text-white">
              <h3 className="text-xl font-bold">Chỉnh sửa thông tin sách</h3>
              <button onClick={() => setEditingBook(null)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveEdit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tên sách</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={editingBook.title}
                    onChange={(e) => setEditingBook({...editingBook, title: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tác giả</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={editingBook.author}
                    onChange={(e) => setEditingBook({...editingBook, author: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Thể loại</label>
                  <select 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={editingBook.category}
                    onChange={(e) => setEditingBook({...editingBook, category: e.target.value})}
                  >
                    <option>Văn học</option>
                    <option>Kinh tế</option>
                    <option>Kỹ năng</option>
                    <option>Thiếu nhi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Giá nhập (VNĐ)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={editingBook.purchasePrice}
                    onChange={(e) => setEditingBook({...editingBook, purchasePrice: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Giá bán (Tự động +15%)</label>
                  <div className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 font-bold">
                    {formatPrice(Math.round(editingBook.purchasePrice * 1.15))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Số lượng kho</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 outline-none"
                    value={editingBook.stock}
                    onChange={(e) => setEditingBook({...editingBook, stock: parseInt(e.target.value)})}
                    required
                  />
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setEditingBook(null)}
                  className="flex-1 px-6 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  Hủy bỏ
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-xl font-bold text-white bg-[#ec5b13] hover:bg-[#ec5b13]/90 transition-all shadow-lg shadow-[#ec5b13]/25"
                >
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ec5b13] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#ec5b13]/20">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-[#ec5b13]">BookO Admin</h1>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Hệ thống quản trị</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 mt-4 space-y-1 overflow-y-auto no-scrollbar">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-semibold">Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20">
            <Book className="w-5 h-5" />
            <span className="text-sm font-bold">Quản lý Sách</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm font-semibold">Đơn hàng</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold">Khách hàng</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-semibold">Báo cáo</span>
          </button>
          
          <div className="pt-4 pb-2">
            <p className="px-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold">Cài đặt</p>
          </div>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-semibold">Cấu hình hệ thống</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-semibold">Phân quyền</span>
          </button>
        </nav>

        <div className="p-4 mt-auto border-t border-slate-200">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-300">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCorfp_wfqNqv5qBT45A0hHa0W9GdCK9-RtjJUo1aMbomtZ1fvvpVhM9qgFT_t0ho9V7i6O88M65-nRCMi2BzeydiMkp8xahWOxXIpGU83aInFbV7qKNcN625H8RXpY2A3ZBh4lVq78GUHKuerLxPAkwcDvjbqTh-xicJ4oqEDWLxb0BlpF4mm-kUrUfn1yQQigzeb7mJaLtvveecL533oZSqRD_yWPX92fYgwQgPPA84Ro4xhsvds_p5hBRDJ4ONln6aNCSAUnwbY" 
                alt="Admin"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">{currentUser?.fullName || 'Admin User'}</p>
              <p className="text-[10px] text-slate-500 font-medium truncate">{currentUser?.email || 'admin@booko.vn'}</p>
            </div>
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setCurrentUser(null);
                setCurrentPage('home');
              }}
              className="text-slate-400 hover:text-[#ec5b13] transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#ec5b13]/50 transition-all placeholder:text-slate-400 outline-none" 
                placeholder="Tìm kiếm sách, tác giả hoặc ISBN..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-8">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-[#ec5b13]/10 hover:text-[#ec5b13] transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#ec5b13] rounded-full ring-2 ring-white"></span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-[#ec5b13]/10 hover:text-[#ec5b13] transition-all">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentPage('home')}
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-[#ec5b13] transition-colors"
            >
              Về cửa hàng
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="flex flex-col gap-8 max-w-7xl mx-auto">
            {/* Page Heading & Top Action */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Quản lý Sách</h2>
                <p className="text-slate-500 font-medium">Danh mục sách hiện có trong hệ thống</p>
              </div>
              <button 
                onClick={() => setIsAddingBook(true)}
                className="flex items-center justify-center gap-2 bg-[#ec5b13] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#ec5b13]/90 transition-all shadow-lg shadow-[#ec5b13]/25"
              >
                <Plus className="w-5 h-5" />
                Thêm sách mới
              </button>
            </div>

            {/* Filter Toolbar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Thể loại:</span>
                <select 
                  className="bg-transparent border-none text-sm font-semibold focus:ring-0 py-0 pl-1 pr-8 cursor-pointer outline-none"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option>Tất cả thể loại</option>
                  <option>Văn học</option>
                  <option>Kinh tế</option>
                  <option>Kỹ năng</option>
                  <option>Thiếu nhi</option>
                </select>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trạng thái:</span>
                <select 
                  className="bg-transparent border-none text-sm font-semibold focus:ring-0 py-0 pl-1 pr-8 cursor-pointer outline-none"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>Tất cả trạng thái</option>
                  <option>Còn hàng</option>
                  <option>Hết hàng</option>
                </select>
              </div>
              <div className="ml-auto flex items-center gap-2 text-slate-400 text-sm">
                <Info className="w-4 h-4" />
                <span>Hiển thị {filteredBooks.length} trong số {books.length} cuốn sách</span>
              </div>
            </div>

            {/* Books Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Hình ảnh</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Thông tin sách</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Thể loại</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Giá nhập</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Giá bán</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Kho</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Trạng thái</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredBooks.map((book) => (
                      <tr key={book.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="w-14 h-14 rounded-lg bg-slate-200 overflow-hidden shadow-sm">
                            <img className="w-full h-full object-cover" src={book.image} alt={book.title} />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900">{book.title}</span>
                            <span className="text-xs text-slate-500 font-medium">{book.author}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            book.category === 'Văn học' ? 'bg-blue-100 text-blue-700' :
                            book.category === 'Kinh tế' ? 'bg-purple-100 text-purple-700' :
                            book.category === 'Kỹ năng' ? 'bg-amber-100 text-amber-700' :
                            'bg-indigo-100 text-indigo-700'
                          }`}>
                            {book.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-sm text-slate-500">{formatPrice(book.purchasePrice)}</td>
                        <td className="px-6 py-4 font-bold text-sm text-[#ec5b13]">{formatPrice(book.price)}</td>
                        <td className="px-6 py-4 text-sm font-medium">{book.stock}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                            book.status === 'Còn hàng' ? 'text-emerald-600 bg-emerald-100' : 'text-red-600 bg-red-100'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              book.status === 'Còn hàng' ? 'bg-emerald-600' : 'bg-red-600'
                            }`}></span>
                            {book.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => setEditingBook(book)}
                              className="p-2 text-slate-400 hover:text-[#ec5b13] hover:bg-[#ec5b13]/10 rounded-lg transition-all"
                            >
                              <Edit3 className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={() => setDeletingBookId(book.id)}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                              title="Xóa sách"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredBooks.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center text-slate-500">
                          Không tìm thấy sách nào khớp với bộ lọc.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="px-6 py-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 font-medium">Hiển thị trang 1 trên 25</p>
                <div className="flex items-center gap-1">
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#ec5b13] text-white font-bold shadow-md shadow-[#ec5b13]/20">1</button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 font-bold transition-all">2</button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 font-bold transition-all">3</button>
                  <span className="px-1 text-slate-400">...</span>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 font-bold transition-all">25</button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'new-arrivals' | 'promotions' | 'cart' | 'login' | 'register' | 'categories' | 'product-detail' | 'profile' | 'checkout' | 'order-success' | 'order-history' | 'order-detail-view' | 'admin-products'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [books, setBooks] = useState(ADMIN_BOOKS.map(book => ({
    ...book,
    purchasePrice: Math.round(book.price * 0.85),
    status: book.stock > 0 ? "Còn hàng" : "Hết hàng"
  })));
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 12 });
  const [activeFilter, setActiveFilter] = useState('Mới nhất');
  const [activeOrderTab, setActiveOrderTab] = useState('Tất cả');
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [showProfilePassword, setShowProfilePassword] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`Đã thêm "${product.title}" vào giỏ hàng!`);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const renderHome = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg group">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx5fQ_x9VzF9X9VIVClgWG3u94kH4syH_9IJJ3umeJDymqFVapZWIBBg1CC1mU8kTpF7YPMUVK2YNX4C_QEeurji1bkXyTxDcf6kMFO_MKuNHQ7a84aWuyp0Zp5Ki58tqkiNxdHgj5uX1LptDU3jfidsR_nFRWjeTK82T_JAmUyFX6yMhwU80JwRi0p2SRNSYY9kPRyrmcDotNmBnkOsQFBwSQrlcEH-Xtf2XnPowVZCwsoP94uLGbBboMnKk2mKPWFhWPeuc7WXM')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-12 text-white">
            <span className="bg-[#308ce8] px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">SỰ KIỆN LỚN NHẤT NĂM</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Hội sách Online<br />Giảm đến 50%</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-md">Khám phá hàng ngàn tựa sách từ văn học, kinh tế đến kỹ năng sống với mức giá ưu đãi nhất.</p>
            <button className="bg-[#308ce8] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl w-fit transition-transform hover:scale-105">
              Mua ngay
            </button>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-4">
          <div className="flex-1 bg-blue-500 rounded-xl p-6 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Sách Mới Mỗi Tuần</h3>
              <p className="text-blue-100 text-sm mb-4">Cập nhật những đầu sách hot nhất thị trường.</p>
              <span className="text-xs font-bold underline cursor-pointer">Xem thêm</span>
            </div>
            <BookOpen className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12 group-hover:rotate-0 transition-transform" />
          </div>
          <div className="flex-1 bg-amber-500 rounded-xl p-6 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Combo Tiết Kiệm</h3>
              <p className="text-amber-100 text-sm mb-4">Mua theo bộ, giảm thêm 15% tổng hóa đơn.</p>
              <span className="text-xs font-bold underline cursor-pointer">Xem ngay</span>
            </div>
            <Award className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform" />
          </div>
        </div>
      </section>

      {/* Flash Sale / Featured Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Bolt className="w-6 h-6 text-[#308ce8] fill-[#308ce8]" />
              Sách Nổi Bật
            </h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-lg font-bold text-sm">
              Kết thúc trong: 
              <span className="bg-red-600 text-white px-1.5 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span> : 
              <span className="bg-red-600 text-white px-1.5 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span> : 
              <span className="bg-red-600 text-white px-1.5 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
          <a href="#" className="text-[#308ce8] font-semibold text-sm hover:underline flex items-center gap-1">
            Xem tất cả <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {FEATURED_BOOKS.map((book) => (
            <motion.div 
              key={book.id} 
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => {
                setSelectedProduct(book);
                setCurrentPage('product-detail');
                window.scrollTo(0, 0);
              }}
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 transition-shadow group-hover:shadow-xl">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">{book.discount}</div>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/80 to-transparent">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(book);
                    }}
                    className="w-full bg-[#308ce8] text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-600"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-800 line-clamp-2 mb-1 group-hover:text-[#308ce8] transition-colors">{book.title}</h3>
              <p className="text-xs text-slate-500 mb-2">{book.author}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#308ce8] font-bold">{formatPrice(book.price)}</span>
                <span className="text-xs text-slate-400 line-through">{formatPrice(book.oldPrice)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section>
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="text-2xl font-bold text-slate-900">Sách Bán Chạy</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-100 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-100 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {BEST_SELLERS.map((book) => (
            <div 
              key={book.id} 
              className="bg-white p-3 rounded-xl border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => {
                setSelectedProduct(book);
                setCurrentPage('product-detail');
                window.scrollTo(0, 0);
              }}
            >
              <div className="aspect-[2/3] rounded-lg bg-slate-100 mb-3 overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xs font-bold mb-1 line-clamp-2 h-8">{book.title}</h4>
              <p className="text-[10px] text-slate-500 mb-2">{book.author}</p>
              <p className="text-sm font-bold text-[#308ce8]">{formatPrice(book.price)}</p>
              <div className="mt-2 flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] text-slate-500">{book.rating} | Đã bán {book.sold}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#308ce8]/5 border border-[#308ce8]/20 rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden group">
          <div className="w-16 h-16 bg-[#308ce8] rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
            <Ticket className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Mã BOOKYNEW</h4>
            <p className="text-sm text-slate-600">Giảm ngay 50k cho đơn hàng đầu tiên từ 300k</p>
            <button className="mt-2 text-xs font-bold text-[#308ce8] hover:underline">Sao chép mã</button>
          </div>
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#308ce8]/20 rounded-full blur-xl"></div>
        </div>

        <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden group">
          <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
            <Truck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Miễn Phí Vận Chuyển</h4>
            <p className="text-sm text-slate-600">Cho đơn hàng từ 150k tại Hà Nội & TP.HCM</p>
            <button className="mt-2 text-xs font-bold text-green-600 hover:underline">Điều kiện áp dụng</button>
          </div>
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-green-500/20 rounded-full blur-xl"></div>
        </div>

        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden group">
          <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Thành Viên Booky</h4>
            <p className="text-sm text-slate-600">Tích điểm đổi quà & ưu đãi sinh nhật 20%</p>
            <button className="mt-2 text-xs font-bold text-amber-600 hover:underline">Đăng ký ngay</button>
          </div>
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-amber-500/20 rounded-full blur-xl"></div>
        </div>
      </section>
    </div>
  );

  const renderNewArrivals = () => (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-slate-900 text-4xl lg:text-5xl font-black leading-tight tracking-tight">Sách Mới Cập Nhật</h1>
        <p className="text-slate-500 text-lg max-w-2xl">Khám phá những tựa sách mới nhất, nóng hổi vừa được lên kệ tại Booky. Cập nhật tri thức mỗi ngày.</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-wrap gap-2">
          {['Mới nhất', 'Giá tăng dần', 'Giá giảm dần', 'Bán chạy'].map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-semibold transition-all ${
                activeFilter === filter ? 'bg-[#308ce8] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter}
              {filter === 'Mới nhất' && <ChevronRight className="w-4 h-4 rotate-90" />}
              {filter === 'Giá tăng dần' && <ArrowRight className="w-4 h-4 -rotate-90" />}
              {filter === 'Giá giảm dần' && <ArrowRight className="w-4 h-4 rotate-90" />}
              {filter === 'Bán chạy' && <Star className="w-4 h-4" />}
            </button>
          ))}
        </div>
        <div className="text-slate-500 text-sm font-medium">
          Hiển thị 24 trong số 156 sản phẩm
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {NEW_ARRIVALS.map((book) => (
          <motion.div 
            key={book.id} 
            className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => {
              setSelectedProduct(book);
              setCurrentPage('product-detail');
              window.scrollTo(0, 0);
            }}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-[#308ce8] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Mới</div>
              <img 
                src={book.image} 
                alt={book.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(book);
                  }}
                  className="bg-white text-[#308ce8] font-bold py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 text-sm"
                >
                  <ShoppingCart className="w-4 h-4" /> Thêm vào giỏ
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-1 flex-1">
              <h3 className="text-slate-900 text-base font-bold leading-snug line-clamp-2">{book.title}</h3>
              <p className="text-slate-500 text-xs font-medium italic">{book.author}</p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-[#308ce8] font-black text-lg">{formatPrice(book.price)}</span>
                <span className="text-slate-400 text-xs line-through">{formatPrice(book.oldPrice)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-12 mb-8">
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-[#308ce8] hover:border-[#308ce8] transition-all">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#308ce8] text-white font-bold">1</button>
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#308ce8] hover:border-[#308ce8] transition-all">2</button>
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#308ce8] hover:border-[#308ce8] transition-all">3</button>
        <div className="w-10 h-10 flex items-center justify-center text-slate-400">...</div>
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#308ce8] hover:border-[#308ce8] transition-all">12</button>
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-[#308ce8] hover:border-[#308ce8] transition-all">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const renderPromotions = () => (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section>
        <div className="relative bg-orange-500 rounded-3xl overflow-hidden h-[350px] flex items-center shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4VJifK8qHg0KJxDK_VN38w_mTa_xaNXIOcQ9nTkfI9797sEx7oos4zUTG30D6N1n-11OOHol4JbOYbVE1TJ_J4PRcvmzr9pFLrkq-kw4ZpFC-x-uZfZUk4qqXBJuBiiJuGlsgOoSm9jJ9M4lZ7F-E2U0fkVIdUMoo307zme75ddR2NjVSzIr-pJxf8hOcGpcRL3x0FbMDue6XzOUUFpkzukEMgVYMShgJXrEkE_G56I3SIZgSK5omBT0UVbDgQlfUl_aYhJs2tws" 
            alt="Khuyến mãi banner" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-20 px-12 text-white max-w-xl">
            <span className="bg-[#308ce8] px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block tracking-wider">Sự kiện lớn nhất năm</span>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">Hội sách Online<br />Giảm đến 50%</h1>
            <p className="text-lg opacity-90 mb-8">Khám phá hàng ngàn tựa sách từ văn học, kinh tế đến kỹ năng sống với mức giá ưu đãi nhất.</p>
            <button className="bg-[#308ce8] hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105">
              Mua ngay
            </button>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-orange-500">⚡</span> Flash Sale
            </h2>
            <p className="text-gray-500 text-sm">
              Kết thúc trong: 
              <span className="bg-red-500 text-white px-2 py-0.5 rounded ml-2">{String(timeLeft.hours).padStart(2, '0')}</span> : 
              <span className="bg-red-500 text-white px-2 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span> : 
              <span className="bg-red-500 text-white px-2 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </p>
          </div>
          <a href="#" className="text-[#308ce8] text-sm font-semibold hover:underline">Xem tất cả &gt;</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {FEATURED_BOOKS.map((book) => (
            <div 
              key={book.id} 
              className="group cursor-pointer"
              onClick={() => {
                setSelectedProduct(book);
                setCurrentPage('product-detail');
                window.scrollTo(0, 0);
              }}
            >
              <div className="relative aspect-[3/4] bg-gray-50 rounded-xl mb-3 overflow-hidden border border-transparent group-hover:border-[#308ce8] transition">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded z-10">{book.discount}</span>
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-sm text-gray-800 line-clamp-2 mb-1 group-hover:text-[#308ce8] transition">{book.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{book.author}</p>
              <div className="flex flex-col">
                <span className="text-[#308ce8] font-bold">{formatPrice(book.price)}</span>
                <span className="text-xs text-gray-400 line-through">{formatPrice(book.oldPrice)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Banners */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white flex items-center justify-between shadow-md group cursor-pointer">
          <div>
            <h3 className="text-2xl font-bold mb-2">Combo Tiết Kiệm</h3>
            <p className="text-sm opacity-90 mb-4">Mua theo bộ, giảm thêm 15% tổng hóa đơn.</p>
            <button className="bg-white text-orange-500 font-bold px-5 py-2 rounded-lg text-sm hover:bg-orange-50 transition">Xem ngay</button>
          </div>
          <BookOpen className="w-24 h-24 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform" />
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white flex items-center justify-between shadow-md group cursor-pointer">
          <div>
            <h3 className="text-2xl font-bold mb-2">Deal Đồng Giá 99K</h3>
            <p className="text-sm opacity-90 mb-4">Hàng loạt tựa sách hot nhất chỉ với 99.000đ.</p>
            <button className="bg-white text-blue-600 font-bold px-5 py-2 rounded-lg text-sm hover:bg-blue-50 transition">Săn deal ngay</button>
          </div>
          <Bolt className="w-24 h-24 opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform" />
        </div>
      </div>

      {/* Best Sellers Promo */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sách Bán Chạy Đang Giảm</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"><ArrowLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PROMO_BEST_SELLERS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col items-center text-center group cursor-pointer"
              onClick={() => {
                setSelectedProduct(item);
                setCurrentPage('product-detail');
                window.scrollTo(0, 0);
              }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto mb-3 rounded-md group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <h4 className="text-xs font-bold mb-1 line-clamp-1">{item.title}</h4>
              <span className="text-[#308ce8] font-bold text-sm">{formatPrice(item.price)}</span>
              <span className="text-[10px] text-red-500 font-bold">{item.discount}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Info Banners */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-2xl flex items-center gap-4 border border-blue-100 shadow-sm">
          <div className="bg-[#308ce8] p-3 rounded-xl text-white">
            <Ticket className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Mã BOOKYNEW</h4>
            <p className="text-xs text-gray-500">Giảm 50k cho đơn đầu tiên từ 300k</p>
            <button className="text-[#308ce8] text-[10px] font-bold mt-1 uppercase">Sao chép mã</button>
          </div>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl flex items-center gap-4 border border-green-100 shadow-sm">
          <div className="bg-green-500 p-3 rounded-xl text-white">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Miễn Phí Vận Chuyển</h4>
            <p className="text-xs text-gray-500">Cho đơn hàng từ 150k tại HN & TP.HCM</p>
            <button className="text-green-600 text-[10px] font-bold mt-1 uppercase">Điều kiện áp dụng</button>
          </div>
        </div>
        <div className="bg-orange-50 p-6 rounded-2xl flex items-center gap-4 border border-orange-100 shadow-sm">
          <div className="bg-orange-500 p-3 rounded-xl text-white">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Thành Viên Booky</h4>
            <p className="text-xs text-gray-500">Tích điểm đổi quà & ưu đãi sinh nhật 20%</p>
            <button className="text-orange-500 text-[10px] font-bold mt-1 uppercase">Đăng ký ngay</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCart = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 30000;
    const discount = 15000;
    const total = subtotal + shipping - discount;

    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-[#308ce8]" />
          Giỏ hàng của bạn
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Product List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                <div className="col-span-6">Sản phẩm</div>
                <div className="col-span-2 text-center">Đơn giá</div>
                <div className="col-span-2 text-center">Số lượng</div>
                <div className="col-span-2 text-right">Thành tiền</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 items-center border-b border-slate-100 last:border-0 group">
                  <div className="col-span-1 md:col-span-6 flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-28 object-cover rounded shadow-sm flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-slate-900 hover:text-[#308ce8] transition-colors cursor-pointer">{item.title}</h3>
                      <p className="text-sm text-slate-500">Tác giả: {item.author}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="md:hidden mt-2 text-xs text-red-500 font-medium flex items-center gap-1"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 text-center">
                    <span className="text-slate-500 md:hidden">Giá: </span>
                    <span className="font-medium">{formatPrice(item.price)}</span>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-center">
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-9">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 hover:bg-slate-100 text-slate-500"
                      >
                        -
                      </button>
                      <input type="text" value={item.quantity} readOnly className="w-10 text-center border-none focus:ring-0 text-sm bg-transparent outline-none" />
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 hover:bg-slate-100 text-[#308ce8]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 text-right flex md:flex-col items-center md:items-end justify-between md:justify-center">
                    <span className="text-slate-500 md:hidden">Thành tiền: </span>
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-[#308ce8]">{formatPrice(item.price * item.quantity)}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="hidden md:flex mt-2 text-slate-400 hover:text-red-500 transition-colors items-center gap-1 text-xs"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage('home')}
              className="inline-flex items-center gap-2 text-[#308ce8] font-medium hover:underline py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Tiếp tục mua sắm
            </button>
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-6 border-b border-slate-100 pb-4">Tóm tắt đơn hàng</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Tạm tính ({cartItems.length} sản phẩm)</span>
                  <span className="font-medium text-slate-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Phí vận chuyển</span>
                  <span className="font-medium text-slate-900">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Giảm giá</span>
                  <span className="font-medium text-red-500">-{formatPrice(discount)}</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-lg">Tổng thanh toán</span>
                  <span className="font-bold text-2xl text-[#308ce8]">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Mã giảm giá" 
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[#308ce8] outline-none"
                  />
                  <button className="px-4 bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm transition-colors">Áp dụng</button>
                </div>
              </div>

              <button 
                onClick={() => {
                  if (!isLoggedIn) {
                    alert("Vui lòng đăng nhập");
                    setCurrentPage('login');
                  } else {
                    setCurrentPage('checkout');
                  }
                }}
                className="w-full bg-[#308ce8] hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#308ce8]/25 transition-all mb-4"
              >
                TIẾN HÀNH THANH TOÁN
              </button>
              <p className="text-center text-xs text-slate-400">
                Phí vận chuyển sẽ được tính toán chính xác dựa trên địa chỉ nhận hàng của bạn.
              </p>
            </div>

            <div className="mt-6 p-4 bg-[#308ce8]/10 border border-[#308ce8]/20 rounded-xl">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#308ce8]" />
                <div>
                  <h4 className="font-bold text-sm text-[#308ce8]">Cam kết từ BookO</h4>
                  <p className="text-xs text-slate-600 mt-1">Sách chính hãng 100%, đóng gói cẩn thận và giao hàng siêu tốc trong 2h.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCheckout = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 30000;
    const discount = 40000;
    const total = subtotal + shipping - discount;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Stepper */}
        <nav className="flex items-center justify-center mb-10 overflow-x-auto pb-4">
          <ol className="flex items-center w-full max-w-3xl">
            <li className="flex items-center text-[#308ce8] shrink-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#308ce8] bg-[#308ce8]/10 mr-2">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-sm font-semibold">Giỏ hàng</span>
            </li>
            <li className="flex w-full items-center">
              <div className="w-full h-0.5 bg-[#308ce8]/30 mx-4"></div>
            </li>
            <li className="flex items-center text-[#308ce8] shrink-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#308ce8] bg-[#308ce8] mr-2 text-white">
                2
              </span>
              <span className="text-sm font-bold">Thanh toán</span>
            </li>
            <li className="flex w-full items-center">
              <div className="w-full h-0.5 bg-slate-200 mx-4"></div>
            </li>
            <li className="flex items-center text-slate-400 shrink-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-200 mr-2">
                3
              </span>
              <span className="text-sm font-medium">Hoàn tất</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Forms */}
          <div className="lg:col-span-8 space-y-6">
            {/* Shipping Info */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#308ce8]" />
                  Thông tin giao hàng
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Họ và tên *</label>
                    <input className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-[#308ce8] focus:border-[#308ce8] px-4 py-2.5 outline-none transition-all" type="text" defaultValue="Nguyễn Văn A"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Số điện thoại *</label>
                    <input className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-[#308ce8] focus:border-[#308ce8] px-4 py-2.5 outline-none transition-all" placeholder="090x xxx xxx" type="tel"/>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-700">Địa chỉ Email *</label>
                    <input className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-[#308ce8] focus:border-[#308ce8] px-4 py-2.5 outline-none transition-all" type="email" defaultValue="vana.nguyen@example.com"/>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-700">Địa chỉ chi tiết *</label>
                    <textarea className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-[#308ce8] focus:border-[#308ce8] px-4 py-2.5 outline-none transition-all" placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố" rows={3}></textarea>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#308ce8]" />
                  Phương thức thanh toán
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {/* COD */}
                <label className="relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all border-[#308ce8] bg-[#308ce8]/5 hover:border-[#308ce8]/50">
                  <input defaultChecked className="text-[#308ce8] focus:ring-[#308ce8] h-5 w-5" name="payment" type="radio"/>
                  <div className="ml-4 flex items-center gap-4">
                    <Handshake className="w-8 h-8 text-slate-500" />
                    <div>
                      <p className="font-bold">Thanh toán khi nhận hàng (COD)</p>
                      <p className="text-xs text-slate-500">Thanh toán bằng tiền mặt khi shipper giao hàng</p>
                    </div>
                  </div>
                </label>
                {/* ATM */}
                <label className="relative flex items-center p-4 rounded-xl border-2 border-slate-100 hover:border-[#308ce8]/50 cursor-pointer transition-all">
                  <input className="text-[#308ce8] focus:ring-[#308ce8] h-5 w-5" name="payment" type="radio"/>
                  <div className="ml-4 flex items-center gap-4">
                    <CreditCard className="w-8 h-8 text-slate-500" />
                    <div>
                      <p className="font-bold">Thẻ ATM / Internet Banking</p>
                      <p className="text-xs text-slate-500">Hỗ trợ tất cả ngân hàng nội địa tại Việt Nam</p>
                    </div>
                  </div>
                </label>
                {/* E-Wallets */}
                <label className="relative flex items-center p-4 rounded-xl border-2 border-slate-100 hover:border-[#308ce8]/50 cursor-pointer transition-all">
                  <input className="text-[#308ce8] focus:ring-[#308ce8] h-5 w-5" name="payment" type="radio"/>
                  <div className="ml-4 flex items-center gap-4">
                    <Wallet className="w-8 h-8 text-slate-500" />
                    <div>
                      <p className="font-bold">Ví MoMo / ZaloPay</p>
                      <p className="text-xs text-slate-500">Thanh toán nhanh qua ứng dụng ví điện tử</p>
                    </div>
                  </div>
                </label>
              </div>
            </section>

            <div className="mt-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#308ce8] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Tiếp tục mua sắm
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Đơn hàng ({cartItems.length} sách)</h2>
                  <button onClick={() => setCurrentPage('cart')} className="text-sm font-medium text-[#308ce8] hover:underline">Sửa</button>
                </div>
              </div>
              {/* Item List */}
              <div className="p-6 max-h-60 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="size-16 rounded bg-slate-100 overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" src={item.image} alt={item.title} referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold line-clamp-1">{item.title}</p>
                      <p className="text-xs text-slate-500">SL: {item.quantity}</p>
                      <p className="text-sm font-semibold text-[#308ce8]">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Cost Breakdown */}
              <div className="p-6 bg-slate-50 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tạm tính</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Phí vận chuyển</span>
                  <span className="font-medium">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600 font-medium">
                  <span>Giảm giá (BOOKONEW)</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between items-end">
                  <div>
                    <p className="text-sm font-medium text-slate-600 leading-none">Tổng cộng</p>
                    <p className="text-xs text-slate-400 mt-1">(Đã bao gồm VAT)</p>
                  </div>
                  <span className="text-2xl font-black text-[#308ce8]">{formatPrice(total)}</span>
                </div>
              </div>
              {/* Place Order Button */}
              <div className="p-6">
                <button 
                  onClick={() => {
                    setCurrentPage('order-success');
                    setCartItems([]);
                  }}
                  className="w-full bg-[#308ce8] hover:bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-[#308ce8]/25 transition-all flex items-center justify-center gap-2 group"
                >
                  ĐẶT HÀNG
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 px-4 uppercase tracking-wider">
                  Nhấn Đặt hàng đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản BookO
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  };

  const renderOrderSuccess = () => (
    <div className="flex-grow flex items-center justify-center py-12 px-4">
      <section className="max-w-2xl w-full text-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-50">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            <Check className="w-12 h-12 text-green-500" strokeWidth={3} />
          </div>
        </div>
        {/* Success Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Đặt hàng thành công!</h1>
        {/* Message Body */}
        <div className="text-gray-600 leading-relaxed mb-10 max-w-md mx-auto">
          <p>Cảm ơn <span className="font-semibold text-gray-900">Nguyễn Văn A</span> đã tin tưởng lựa chọn <span className="text-[#308ce8] font-medium">BookO</span>.</p>
          <p className="mt-2">Đơn hàng <span className="font-mono text-[#308ce8] font-semibold">#ORD12347</span> của bạn đang được xử lý và sẽ sớm được giao đến bạn.</p>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="px-8 py-3 bg-[#308ce8] text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center"
          >
            Tiếp tục mua sắm
          </button>
          <button 
            onClick={() => setCurrentPage('order-history')}
            className="px-8 py-3 bg-white text-gray-600 font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition-all inline-flex items-center justify-center"
          >
            Xem lịch sử đơn hàng
          </button>
        </div>
      </section>
    </div>
  );

  const renderOrderHistory = () => {
    const allOrders = [
      {
        id: 'ORD12345',
        date: '15/10/2023, 14:30',
        status: 'Đang giao',
        statusColor: 'amber',
        total: 450000,
        mainItem: {
          title: 'Đắc Nhân Tâm (Bìa Cứng)',
          author: 'Dale Carnegie',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8g-d5fLWv_Jd9hw0bdguMstDJUzn6iKvLCjPooFYUMwjLWMCKhrcWHvuPRbO934PxiNvQmIFcjROwB5heSyZ1mAeCORRZ-iM1HKugVn9-aONrZxH2vqirkwak1ZecUg8rK8q_bBqPiLO9EzdNe_zFSK0--vwbUoKjIIc7-sBufCCPDkmhOKdFU6PL9oJMASAE_kj--21fGajFqgURjcLstyZdIDn7i4-La0e_fkAaVRMMYs5GY1nnhXslL4CxdiexjowNcMHRWI0',
        },
        otherItemsCount: 2
      },
      {
        id: 'ORD12344',
        date: '10/10/2023, 09:15',
        status: 'Đã hoàn thành',
        statusColor: 'green',
        total: 210000,
        mainItem: {
          title: 'Nhà Giả Kim',
          author: 'Paulo Coelho',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK8nFMQxCPVC0YCgAQKrTNoCws5E8GsqBsMZsnAtfqZh87uBDDYpKk7Hy3JMsD5oc3lCMz6_EI42Xr9lfkIzLDYm1JzGVmYrINt66VPMq847giUBNkatqVmcUv75Ofqp-f55rCWI_Df_wITVlBUxkHSEgUs4VadMdBDvf7_flKURxWPJ7Msl421iYAaqXrNTbGIhGHJKiODumVDHLcc2GcdhOW9PDZRNibV4-i-BRg1kuj2MGzQy5PWR80nkTz90Avg5RHK0xcEhw',
        },
        quantity: 1
      },
      {
        id: 'ORD12340',
        date: '01/10/2023, 20:45',
        status: 'Đã hủy',
        statusColor: 'red',
        total: 185000,
        mainItem: {
          title: 'Lược Sử Thời Gian',
          author: 'Stephen Hawking',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiiwI-bWKAurGTp6x8ioWFMHhnFJpYIegcy7_yG8BPWb_lMc0Sl2fP-0Hk4-CtsCB9kX5OX64MkXISgKDfnEfsw3eBqimt1yWoFKMXIWVtRbEmY_AM_PnQ7JiNM0HCDSMsUeSaYLHPQoL8LB3px8rtOApLfTuA9aPAgcL55aUxrJhvP4Gmmpk6sj2isDRJfnB54s8Gdu3iCxIs4GvQ5qBOi56ngW-JiB51hqeYiEyG8-gpkiUFpz6Hps9l4ZtKzdrAT-W93jBgT_o',
        },
        quantity: 1
      }
    ];

    const filteredOrders = activeOrderTab === 'Tất cả' 
      ? allOrders 
      : allOrders.filter(order => order.status === activeOrderTab);

    const tabs = ['Tất cả', 'Chờ xác nhận', 'Đang giao', 'Đã hoàn thành', 'Đã hủy'];

    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Link */}
        <div className="mb-6">
          <button 
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#308ce8] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Tiếp tục mua sắm
          </button>
        </div>

        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Lịch sử đơn hàng</h2>
          <div className="flex gap-2 text-sm">
            <span className="px-3 py-1 bg-slate-200 rounded-full font-medium text-slate-700">Tổng {allOrders.length} đơn hàng</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-6 border-b border-slate-200 mb-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveOrderTab(tab)}
              className={`pb-4 text-sm transition-colors border-b-2 ${
                activeOrderTab === tab 
                  ? 'font-bold border-[#308ce8] text-[#308ce8]' 
                  : 'font-semibold text-slate-500 hover:text-[#308ce8] border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-slate-50 gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      order.statusColor === 'amber' ? 'bg-amber-50 text-amber-500' : 
                      order.statusColor === 'green' ? 'bg-green-50 text-green-500' : 
                      'bg-red-50 text-red-500'
                    }`}>
                      {order.statusColor === 'amber' && <TruckIcon className="w-5 h-5" />}
                      {order.statusColor === 'green' && <CheckCircle2 className="w-5 h-5" />}
                      {order.statusColor === 'red' && <XCircle className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Đơn hàng #{order.id}</h3>
                      <p className="text-xs text-slate-500">Đặt lúc: {order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                      order.statusColor === 'amber' ? 'bg-amber-50 text-amber-600' : 
                      order.statusColor === 'green' ? 'bg-green-50 text-green-600' : 
                      'bg-red-50 text-red-600'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-28 bg-slate-100 rounded-lg overflow-hidden shadow-inner">
                    <img alt={order.mainItem.title} className="w-full h-full object-cover" src={order.mainItem.image} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 mb-1 truncate">{order.mainItem.title}</p>
                    <p className="text-xs text-slate-500 mb-2">Tác giả: {order.mainItem.author}</p>
                    {order.otherItemsCount ? (
                      <p className="text-sm text-slate-400 italic">Và {order.otherItemsCount} sản phẩm khác...</p>
                    ) : (
                      <p className="text-sm text-slate-400 italic">Số lượng: {order.quantity}</p>
                    )}
                  </div>
                  <div className="text-right flex flex-col justify-between h-full">
                    <p className={`text-lg font-black ${order.status === 'Đã hủy' ? 'text-slate-400 line-through' : 'text-[#308ce8]'}`}>
                      {formatPrice(order.total)}
                    </p>
                    <button 
                      onClick={() => {
                        setSelectedOrder(order);
                        setCurrentPage('order-detail-view');
                        window.scrollTo(0, 0);
                      }}
                      className="mt-4 px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 rounded-lg hover:bg-[#308ce8] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      Xem chi tiết
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingBasket className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Chưa có đơn hàng nào</h3>
              <p className="text-slate-500 max-w-xs mx-auto text-sm mb-8">Bạn chưa có đơn hàng nào trong trạng thái này. Hãy tiếp tục khám phá kho sách của BookO nhé!</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="inline-flex items-center px-6 py-3 bg-[#308ce8] text-white font-bold rounded-xl shadow-lg shadow-[#308ce8]/20 hover:bg-blue-600 transition-all"
              >
                Khám phá ngay
              </button>
            </div>
          )}
        </div>

        {/* Support Section */}
        <div className="mt-12 p-8 rounded-2xl bg-[#308ce8]/5 border border-[#308ce8]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">Bạn gặp vấn đề với đơn hàng?</h4>
            <p className="text-sm text-slate-600 mt-1">Đội ngũ hỗ trợ của BookO luôn sẵn sàng 24/7 để hỗ trợ bạn.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-sm hover:shadow-lg transition-all">Chat hỗ trợ</button>
            <button className="px-6 py-2.5 bg-[#308ce8] text-white rounded-xl font-bold text-sm shadow-md hover:bg-blue-600 hover:shadow-lg transition-all">Liên hệ Hotline</button>
          </div>
        </div>
      </div>
    );
  };

  const renderOrderDetail = () => {
    if (!selectedOrder) return null;

    // Mocking some extra data for the detail view
    const orderItems = [
      selectedOrder.mainItem,
      {
        title: 'Nhà Giả Kim',
        author: 'Paulo Coelho',
        price: 210000,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK8nFMQxCPVC0YCgAQKrTNoCws5E8GsqBsMZsnAtfqZh87uBDDYpKk7Hy3JMsD5oc3lCMz6_EI42Xr9lfkIzLDYm1JzGVmYrINt66VPMq847giUBNkatqVmcUv75Ofqp-f55rCWI_Df_wITVlBUxkHSEgUs4VadMdBDvf7_flKURxWPJ7Msl421iYAaqXrNTbGIhGHJKiODumVDHLcc2GcdhOW9PDZRNibV4-i-BRg1kuj2MGzQy5PWR80nkTz90Avg5RHK0xcEhw',
      },
      {
        title: 'Lược Sử Thời Gian',
        author: 'Stephen Hawking',
        price: 155000,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiiwI-bWKAurGTp6x8ioWFMHhnFJpYIegcy7_yG8BPWb_lMc0Sl2fP-0Hk4-CtsCB9kX5OX64MkXISgKDfnEfsw3eBqimt1yWoFKMXIWVtRbEmY_AM_PnQ7JiNM0HCDSMsUeSaYLHPQoL8LB3px8rtOApLfTuA9aPAgcL55aUxrJhvP4Gmmpk6sj2isDRJfnB54s8Gdu3iCxIs4GvQ5qBOi56ngW-JiB51hqeYiEyG8-gpkiUFpz6Hps9l4ZtKzdrAT-W93jBgT_o',
      }
    ].slice(0, selectedOrder.otherItemsCount ? 3 : 1);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <button onClick={() => setCurrentPage('home')} className="hover:text-[#308ce8]">Trang chủ</button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={() => setCurrentPage('order-history')} className="hover:text-[#308ce8]">Lịch sử đơn hàng</button>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-900">Chi tiết đơn hàng #{selectedOrder.id}</span>
        </nav>

        {/* Order Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black tracking-tight">Đơn hàng #{selectedOrder.id}</h1>
              <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border ${
                selectedOrder.statusColor === 'amber' ? 'bg-amber-50 text-amber-600 border-amber-200' : 
                selectedOrder.statusColor === 'green' ? 'bg-green-50 text-green-600 border-green-200' : 
                'bg-red-50 text-red-600 border-red-200'
              }`}>
                {selectedOrder.statusColor === 'amber' && <TruckIcon className="w-4 h-4" />}
                {selectedOrder.statusColor === 'green' && <CheckCircle2 className="w-4 h-4" />}
                {selectedOrder.statusColor === 'red' && <XCircle className="w-4 h-4" />}
                {selectedOrder.status}
              </span>
            </div>
            <p className="text-slate-500 text-sm italic">Ngày đặt hàng: {selectedOrder.date}</p>
          </div>
          <button 
            onClick={() => setCurrentPage('order-history')}
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-xl font-bold text-sm transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Quay lại lịch sử đơn hàng
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Order Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-slate-600">
                    <MapPin className="w-4 h-4" />
                    Thông tin giao hàng
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-tighter">Người nhận</p>
                    <p className="font-bold text-slate-800">Nguyễn Văn A</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-tighter">Số điện thoại</p>
                    <p className="font-medium">090 123 4567</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-tighter">Địa chỉ</p>
                    <p className="text-sm leading-relaxed text-slate-600">123 Đường Sách, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
                  </div>
                </div>
              </div>
              {/* Payment Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-slate-600">
                    <CreditCard className="w-4 h-4" />
                    Phương thức thanh toán
                  </div>
                </div>
                <div className="p-5 flex flex-col items-center justify-center min-h-[140px] text-center gap-3">
                  <div className="w-16 h-16 bg-[#308ce8]/5 rounded-2xl flex items-center justify-center">
                    {selectedOrder.id === 'ORD12340' ? (
                      <TruckIcon className="w-8 h-8 text-[#308ce8]" />
                    ) : (
                      <Wallet className="w-8 h-8 text-[#308ce8]" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">
                      {selectedOrder.id === 'ORD12340' ? 'Thanh toán khi nhận hàng (COD)' : 'Ví điện tử ZaloPay'}
                    </p>
                    {selectedOrder.id === 'ORD12340' ? (
                      <p className="text-xs text-amber-500 font-medium flex items-center justify-center gap-1">
                        <History className="w-4 h-4" /> Chưa thanh toán
                      </p>
                    ) : (
                      <p className="text-xs text-green-500 font-medium flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Đã thanh toán
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-100">
                <h3 className="font-bold text-lg">Danh sách sản phẩm ({orderItems.length})</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {orderItems.map((item, idx) => (
                  <div key={idx} className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                    <div className="w-20 h-28 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden shadow-sm">
                      <img alt={item.title} className="w-full h-full object-cover" src={item.image} referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 truncate hover:text-[#308ce8] transition-colors">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">Tác giả: {item.author}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-slate-600">Số lượng: <span className="font-bold">1</span></p>
                        <p className="font-bold text-[#308ce8]">{formatPrice(item.price || 85000)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-100">
                <h3 className="font-bold text-lg">Tổng kết đơn hàng</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Tạm tính</span>
                  <span className="font-medium">{formatPrice(selectedOrder.total)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Phí vận chuyển</span>
                  <span className="font-medium">0₫</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                  <span className="font-bold text-slate-900">Tổng cộng</span>
                  <div className="text-right">
                    <p className="text-2xl font-black text-[#308ce8]">{formatPrice(selectedOrder.total)}</p>
                    <p className="text-[10px] text-slate-400 italic">(Đã bao gồm VAT)</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-dashed border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trạng thái vận chuyển</h4>
                  <div className="space-y-6">
                    <div className="flex gap-3">
                      <div className="relative flex flex-col items-center">
                        <div className={`w-2.5 h-2.5 rounded-full ring-4 z-10 ${selectedOrder.status === 'Đã hủy' ? 'bg-red-500 ring-red-100' : 'bg-[#308ce8] ring-[#308ce8]/20'}`}></div>
                        <div className={`w-0.5 h-10 absolute top-2.5 ${selectedOrder.status === 'Đã hủy' ? 'bg-red-200' : 'bg-[#308ce8]'}`}></div>
                      </div>
                      <div>
                        <p className="text-sm font-bold">{selectedOrder.status === 'Đã hủy' ? 'Đã hủy đơn hàng' : 'Đang giao hàng'}</p>
                        <p className="text-[11px] text-slate-500">{selectedOrder.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="relative flex flex-col items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 z-10"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-400">Đã giao hàng thành công</p>
                        <p className="text-[11px] text-slate-500">Dự kiến: 17/10/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                {selectedOrder.status !== 'Đã hủy' && (
                  <button className="w-full mt-6 bg-[#308ce8] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#308ce8]/20 transition-all active:scale-[0.98]">
                    Theo dõi trên bản đồ
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLogin = () => (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 bg-[#f6f7f8]">
      <div className="w-full max-w-[480px]">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-200">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-slate-900 mb-2">Đăng nhập</h1>
            <p className="text-sm text-slate-500">Vui lòng đăng nhập để tiếp tục mua sắm tại BookO</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const username = formData.get('username') as string;
              const password = formData.get('password') as string;
              
              if (!username || !password) {
                alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
                return;
              }

              const user = MOCK_USERS.find(u => u.username === username && u.password === password);
              if (user) {
                setIsLoggedIn(true);
                setCurrentUser(user);
                setCurrentPage('home');
              } else {
                alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
              }
            }}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Tên đăng nhập</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search className="w-5 h-5" /> {/* Using Search as a placeholder for person icon if not available, but person is common */}
                </span>
                <input 
                  name="username"
                  type="text" 
                  required
                  placeholder="Nhập tên đăng nhập của bạn"
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#308ce8] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Mật khẩu</label>
                <button type="button" className="text-xs font-semibold text-[#308ce8] hover:underline">Quên mật khẩu?</button>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Bolt className="w-5 h-5" /> {/* Placeholder for lock icon */}
                </span>
                <input 
                  name="password"
                  type="password" 
                  required
                  placeholder="Nhập mật khẩu của bạn"
                  className="w-full h-14 pl-12 pr-12 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#308ce8] outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-[#308ce8] focus:ring-[#308ce8]/20 transition-all cursor-pointer" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Ghi nhớ đăng nhập</span>
              </label>
            </div>

            <button className="w-full h-14 bg-[#308ce8] hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-[#308ce8]/20 transition-all flex items-center justify-center gap-2">
              Đăng nhập
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-400 font-medium">Hoặc đăng nhập với</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center h-12 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <img className="w-5 h-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiKZbks1Yjn0na5trq4u3-Z3p58q65PYK0D0kZ2GxUTOZJxuqJxZ3w_Qo_aWZWaJelym58DePgeUmAlnA80BbSiEjSx5zx2qqgOqJgdVxt2dww1JeAAgntFb4FSZfvDcT1L6A6rDthBBn1v_VUjGzNtSv5paYhuBsi_qJL0o8Js2zI7DY60FcSYb1tCjKjoNmAm4_RPmnMkT629_YjpO1BsqOkL4dic1G70WOiFvRjeltvTQ0v0-qPtyvBKV6nHYTYYbZZyJ7Os28" alt="Google" />
              <span className="text-sm font-semibold">Google</span>
            </button>
            <button className="flex items-center justify-center h-12 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Facebook className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold">Facebook</span>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600 font-medium">
          Bạn mới sử dụng BookO? 
          <button onClick={() => setCurrentPage('register')} className="text-[#308ce8] font-bold hover:underline ml-1">Tạo tài khoản ngay</button>
        </p>
        <div className="mt-8 flex justify-center">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#308ce8] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );

  const renderCategories = () => (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <button onClick={() => setCurrentPage('home')} className="hover:text-[#308ce8] text-slate-600 font-medium">Trang chủ</button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-500">Danh mục</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-900 font-medium">Tất cả sách</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Thể loại</h3>
            <div className="space-y-1">
              {CATEGORIES_LIST.map((cat) => (
                <button 
                  key={cat.name}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${
                    cat.active ? 'bg-[#308ce8]/10 text-[#308ce8] font-medium' : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <cat.icon className={`w-5 h-5 ${cat.active ? 'fill-[#308ce8]/20' : ''}`} />
                    {cat.name}
                  </span>
                  {cat.count && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      cat.active ? 'bg-[#308ce8] text-white' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Khoảng giá (VNĐ)</h3>
            <div className="px-2">
              <input 
                type="range" 
                min="0" 
                max="1000000" 
                step="50000"
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#308ce8]" 
              />
              <div className="flex justify-between mt-3 text-xs font-medium text-slate-600">
                <span>0đ</span>
                <span>1.000.000đ+</span>
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Đánh giá</h3>
            <div className="space-y-3">
              {[4, 3].map((rating) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="rounded text-[#308ce8] focus:ring-[#308ce8] w-5 h-5 bg-slate-100 border-slate-300" />
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-amber-400' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 group-hover:text-[#308ce8] transition-colors">Từ {rating} sao</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1">
          {/* Sorting & View Options */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 bg-white p-4 rounded-xl border border-slate-200">
            <div>
              <h2 className="text-lg font-bold">Tất cả sách <span className="text-slate-400 font-normal text-sm ml-2">(452 sản phẩm)</span></h2>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <span className="text-sm text-slate-500 whitespace-nowrap">Sắp xếp:</span>
              <select className="text-sm border-slate-200 bg-transparent rounded-lg focus:ring-[#308ce8] focus:border-[#308ce8] flex-1 sm:w-48 py-1.5 outline-none">
                <option>Mới nhất</option>
                <option>Giá: Thấp đến Cao</option>
                <option>Giá: Cao đến Thấp</option>
                <option>Phổ biến nhất</option>
              </select>
              <div className="hidden sm:flex border border-slate-200 rounded-lg overflow-hidden">
                <button className="p-1.5 bg-slate-100 text-[#308ce8]">
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button className="p-1.5 hover:bg-slate-100">
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {CATEGORY_BOOKS.map((book) => (
              <motion.div 
                key={book.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => {
                  setSelectedProduct(book);
                  setCurrentPage('product-detail');
                  window.scrollTo(0, 0);
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(book);
                      }}
                      className="bg-white text-slate-900 p-3 rounded-full hover:bg-[#308ce8] hover:text-white transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-[#308ce8] hover:text-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#308ce8] font-bold uppercase tracking-wide mb-1">{book.category}</p>
                  <h3 className="font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-[#308ce8] transition-colors">{book.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#308ce8]">{formatPrice(book.price)}</span>
                    <div className="flex items-center text-amber-400 text-sm">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="ml-1 font-bold text-slate-700">{book.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors disabled:opacity-50" disabled>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#308ce8] text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">3</button>
              <span className="mx-1 text-slate-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">15</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );

  const renderProductDetail = () => {
    if (!selectedProduct) return null;

    return (
      <div className="space-y-8">
        <div className="mb-6">
          <button onClick={() => setCurrentPage('home')} className="text-sm font-medium text-gray-500 hover:text-[#308ce8] transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Tiếp tục mua sắm
          </button>
        </div>

        {/* Product Intro */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row p-6 lg:p-10 gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-lg group">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Book Info */}
            <div className="flex-1 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#308ce8] text-xs font-bold rounded-full uppercase tracking-wider mb-2">Best Seller</span>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{selectedProduct.title}</h1>
                <p className="text-lg text-gray-600">Tác giả: <span className="font-semibold text-[#308ce8] hover:underline cursor-pointer">{selectedProduct.author || "Dale Carnegie"}</span></p>
              </div>
              {/* Ratings */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-yellow-400' : ''}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(120 đánh giá) | 2,5k đã bán</span>
              </div>
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#308ce8]">{formatPrice(selectedProduct.price)}</span>
                {selectedProduct.oldPrice && (
                  <span className="ml-3 text-lg text-gray-400 line-through">{formatPrice(selectedProduct.oldPrice)}</span>
                )}
              </div>
              {/* Short Desc */}
              <div className="mb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                Được mệnh danh là cuốn sách thay đổi cuộc đời của hàng triệu người, "{selectedProduct.title}" không chỉ là nghệ thuật thu phục lòng người mà còn là những bài học sâu sắc về cuộc sống và cách đối nhân xử thế.
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button 
                  onClick={() => addToCart(selectedProduct)}
                  className="flex-1 px-8 py-4 border-2 border-[#308ce8] text-[#308ce8] font-bold rounded-xl hover:bg-[#308ce8]/5 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Thêm vào giỏ hàng
                </button>
                <button className="flex-1 px-8 py-4 bg-[#308ce8] text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-[#308ce8]/20 transition-all">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-4 mb-6">Mô tả sản phẩm</h2>
              <article className="prose prose-blue max-w-none text-gray-600 space-y-4">
                <p>
                  "{selectedProduct.title}" là cuốn sách nổi tiếng nhất, có tầm ảnh hưởng nhất mọi thời đại. Tác phẩm đã được dịch sang hầu hết các ngôn ngữ phổ biến trên thế giới và có mặt ở hàng trăm quốc gia.
                </p>
                <p>
                  Cuốn sách đưa ra các lời khuyên về cách cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống. Các nguyên tắc trong sách rất đơn giản nhưng mang lại hiệu quả to lớn nếu được áp dụng chân thành.
                </p>
              </article>
            </section>

            {/* Review Section */}
            <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h2 className="text-xl font-bold text-gray-900">Đánh giá từ khách hàng</h2>
                <button className="text-[#308ce8] font-semibold hover:underline text-sm">Viết đánh giá</button>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4 border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-400 font-bold">T</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900">Trần Thị B</h4>
                      <span className="text-xs text-gray-400">2 ngày trước</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400" />)}
                    </div>
                    <p className="text-sm text-gray-600">Sách rất hay, giao hàng nhanh, đóng gói cẩn thận. Nội dung thì không cần bàn cãi vì quá nổi tiếng rồi.</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-10 py-3 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Xem tất cả đánh giá
              </button>
            </section>

            {/* Suggestions */}
            <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-4 mb-6">Gợi ý sách</h2>
              <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar scroll-smooth">
                {FEATURED_BOOKS.map((book) => (
                  <div 
                    key={book.id} 
                    className="group flex-shrink-0 w-36 sm:w-44 cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(book);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-3">
                      <img src={book.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2">{book.title}</h4>
                    <p className="text-[#308ce8] font-bold text-sm mt-1">{formatPrice(book.price)}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-green-500" />
                Dịch vụ của chúng tôi
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-[#308ce8]">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Giao hàng miễn phí</p>
                    <p className="text-xs text-gray-500">Cho đơn hàng từ 250.000đ</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-[#308ce8]">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Đổi trả dễ dàng</p>
                    <p className="text-xs text-gray-500">Trong vòng 7 ngày nếu có lỗi</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[#308ce8]/5 rounded-2xl p-6 border border-[#308ce8]/10">
              <h3 className="font-bold text-gray-900 mb-2">Thông tin chi tiết</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Nhà xuất bản</span>
                  <span className="font-medium">NXB Tổng hợp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Kích thước</span>
                  <span className="font-medium">14.5 x 20.5 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Số trang</span>
                  <span className="font-medium">320</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Loại bìa</span>
                  <span className="font-medium">Bìa mềm</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  };

  const renderRegister = () => (
    <div className="flex-grow flex items-center justify-center py-16 px-4 bg-[#f6f7f8]">
      <div className="w-full max-w-[480px]">
        <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Tạo tài khoản mới</h2>
            <p className="text-slate-500">Chào mừng bạn đến với BookO. Hãy đăng ký để bắt đầu mua sắm.</p>
          </div>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 ml-1">Tên đăng nhập</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Nhập tên đăng nhập của bạn"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:border-[#308ce8] focus:ring-4 focus:ring-[#308ce8]/10 rounded-xl text-base transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="example@email.com"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:border-[#308ce8] focus:ring-4 focus:ring-[#308ce8]/10 rounded-xl text-base transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 ml-1">Mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Bolt className="w-5 h-5" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:border-[#308ce8] focus:ring-4 focus:ring-[#308ce8]/10 rounded-xl text-base transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 ml-1">Xác nhận mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:border-[#308ce8] focus:ring-4 focus:ring-[#308ce8]/10 rounded-xl text-base transition-all outline-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-[#308ce8] text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-600 focus:ring-4 focus:ring-[#308ce8]/30 transition-all text-lg shadow-lg shadow-[#308ce8]/20">
                Đăng ký
              </button>
            </div>
          </form>
          <div className="mt-8 text-center space-y-4">
            <p className="text-slate-600 text-sm">
              Đã có tài khoản? 
              <button onClick={() => setCurrentPage('login')} className="text-[#308ce8] font-bold hover:underline ml-1">Đăng nhập ngay</button>
            </p>
            <div className="pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed">
                Bằng cách đăng ký, bạn đồng ý với 
                <button className="underline mx-1">Điều khoản</button> và 
                <button className="underline mx-1">Chính sách</button> của BookO.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => setCurrentPage('home')} className="inline-flex items-center gap-2 text-slate-500 hover:text-[#308ce8] transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'admin-products') {
    return (
      <AdminProductManagement 
        currentUser={currentUser}
        setCurrentPage={setCurrentPage}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentUser={setCurrentUser}
        books={books}
        setBooks={setBooks}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Hidden on login/register page */}
      {currentPage !== 'login' && currentPage !== 'register' && (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20 gap-8">
              {/* Logo */}
              <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 shrink-0">
                <span className="text-2xl font-extrabold tracking-tighter text-[#308ce8]">BookO</span>
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl hidden md:block">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-slate-400 group-focus-within:text-[#308ce8] transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm sách, tác giả, nhà xuất bản..."
                    className="block w-full pl-11 pr-24 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-[#308ce8] focus:bg-white transition-all text-sm outline-none"
                    value={globalSearchQuery}
                    onChange={(e) => setGlobalSearchQuery(e.target.value)}
                  />
                  <button className="absolute inset-y-1.5 right-1.5 px-4 bg-[#308ce8] text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                    Tìm kiếm
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 lg:gap-6">
                <button 
                  onClick={() => setCurrentPage('cart')}
                  className="flex items-center gap-1 cursor-pointer hover:text-[#308ce8] transition-colors relative"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-[#308ce8] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </button>
                <div className="h-6 w-px bg-slate-200 mx-2"></div>
                {isLoggedIn ? (
                  <div className="relative group flex items-center gap-2 cursor-pointer pl-4 border-l border-gray-200">
                    <span className="text-sm font-medium text-gray-700 hidden md:block">{currentUser?.fullName || 'Tài khoản'}</span>
                    <div className="w-9 h-9 rounded-full bg-[#308ce8]/10 flex items-center justify-center border border-[#308ce8]/20 overflow-hidden">
                      <UserCircle className="h-5 w-5 text-[#308ce8]" />
                    </div>
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      <button 
                        onClick={() => setCurrentPage('profile')}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      >
                        <User className="w-4 h-4" /> Thông tin tài khoản
                      </button>
                      {currentUser?.role !== 'admin' && (
                        <button 
                          onClick={() => setCurrentPage('order-history')}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        >
                          <History className="w-4 h-4" /> Lịch sử đơn hàng
                        </button>
                      )}
                      <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCurrentPage('login')} className="text-sm font-semibold px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors">Đăng nhập</button>
                    <button onClick={() => setCurrentPage('register')} className="text-sm font-semibold px-4 py-2 bg-[#308ce8]/10 text-[#308ce8] border border-[#308ce8]/20 rounded-lg hover:bg-[#308ce8] hover:text-white transition-all">Đăng ký</button>
                  </div>
                )}
              </div>
            </div>

            {/* Nav */}
            <nav className="flex items-center gap-8 h-12 overflow-x-auto no-scrollbar whitespace-nowrap">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-semibold h-full flex items-center transition-all ${
                  currentPage === 'home' ? 'text-[#308ce8] border-b-2 border-[#308ce8]' : 'text-slate-600 hover:text-[#308ce8]'
                }`}
              >
                Trang chủ
              </button>
              <button 
                onClick={() => setCurrentPage('categories')}
                className={`text-sm font-semibold h-full flex items-center transition-all ${
                  currentPage === 'categories' ? 'text-[#308ce8] border-b-2 border-[#308ce8]' : 'text-slate-600 hover:text-[#308ce8]'
                }`}
              >
                Danh mục Sách
              </button>
              <button 
                onClick={() => setCurrentPage('new-arrivals')}
                className={`text-sm font-semibold h-full flex items-center transition-all ${
                  currentPage === 'new-arrivals' ? 'text-[#308ce8] border-b-2 border-[#308ce8]' : 'text-slate-600 hover:text-[#308ce8]'
                }`}
              >
                Sách Mới
              </button>
              <button 
                onClick={() => setCurrentPage('promotions')}
                className={`text-sm font-semibold h-full flex items-center transition-all ${
                  currentPage === 'promotions' ? 'text-[#308ce8] border-b-2 border-[#308ce8]' : 'text-slate-600 hover:text-[#308ce8]'
                }`}
              >
                Khuyến mãi
              </button>
              {isLoggedIn && currentUser?.role === 'admin' && (
                <button 
                  onClick={() => setCurrentPage('admin-products')}
                  className={`text-sm font-semibold h-full flex items-center transition-all ${
                    currentPage === 'admin-products' ? 'text-[#308ce8] border-b-2 border-[#308ce8]' : 'text-slate-600 hover:text-[#308ce8]'
                  }`}
                >
                  Quản lý sản phẩm
                </button>
              )}
            </nav>
          </div>
        </header>
      )}

      <main className={`flex-1 w-full ${(currentPage === 'login' || currentPage === 'register') ? 'flex flex-col' : 'max-w-7xl mx-auto px-4 lg:px-8 py-6'}`}>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'new-arrivals' && renderNewArrivals()}
        {currentPage === 'promotions' && renderPromotions()}
        {currentPage === 'cart' && renderCart()}
        {currentPage === 'login' && renderLogin()}
        {currentPage === 'register' && renderRegister()}
        {currentPage === 'categories' && renderCategories()}
        {currentPage === 'product-detail' && renderProductDetail()}
        {currentPage === 'profile' && (
          <ProfilePage 
            currentUser={currentUser}
            setCurrentPage={setCurrentPage}
            showProfilePassword={showProfilePassword}
            setShowProfilePassword={setShowProfilePassword}
            setShowChangePasswordForm={setShowChangePasswordForm}
            setIsLoggedIn={setIsLoggedIn}
            setCurrentUser={setCurrentUser}
            showChangePasswordForm={showChangePasswordForm}
          />
        )}
        {currentPage === 'checkout' && renderCheckout()}
        {currentPage === 'order-success' && renderOrderSuccess()}
        {currentPage === 'order-history' && renderOrderHistory()}
        {currentPage === 'order-detail-view' && renderOrderDetail()}
      </main>

      {/* Footer - Hidden on login/register page */}
      {currentPage !== 'login' && currentPage !== 'register' ? (
        <footer className="bg-white border-t border-slate-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Branding */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#308ce8] rounded flex items-center justify-center text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-[#308ce8]">Booky</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Booky là nền tảng bán sách trực tuyến hàng đầu Việt Nam, mang tri thức đến mọi nhà với dịch vụ nhanh chóng và tận tâm.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#308ce8] hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#308ce8] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Links 1 */}
              <div>
                <h5 className="font-bold mb-6 text-slate-900">Dịch vụ</h5>
                <ul className="space-y-4">
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Điều khoản sử dụng</a></li>
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Chính sách bảo mật</a></li>
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Hệ thống nhà sách</a></li>
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Liên hệ với chúng tôi</a></li>
                </ul>
              </div>

              {/* Links 2 */}
              <div>
                <h5 className="font-bold mb-6 text-slate-900">Hỗ trợ</h5>
                <ul className="space-y-4">
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Hướng dẫn mua hàng</a></li>
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Phương thức thanh toán</a></li>
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Chính sách đổi trả</a></li>
                  <li><a href="#" className="text-sm text-slate-500 hover:text-[#308ce8] transition-colors">Vận chuyển & Giao nhận</a></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h5 className="font-bold mb-6 text-slate-900">Đăng ký nhận tin</h5>
                <p className="text-sm text-slate-500 mb-4">Nhận thông báo về các đầu sách mới và khuyến mãi sớm nhất.</p>
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="Email của bạn"
                    className="bg-slate-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#308ce8] outline-none"
                  />
                  <button className="bg-[#308ce8] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all">Đăng ký ngay</button>
                </div>
                <div className="mt-8">
                  <h6 className="text-[10px] uppercase font-bold text-slate-400 mb-3 tracking-widest">Thanh toán an toàn</h6>
                  <div className="flex flex-wrap gap-4 opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer">
                    <CreditCard className="w-6 h-6" />
                    <Building2 className="w-6 h-6" />
                    <Wallet className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400">© 2024 Booky JSC. Bảo lưu mọi quyền.</p>
              <div className="flex items-center gap-6">
                <span className="text-xs text-slate-400 cursor-pointer hover:text-[#308ce8]">Tiếng Việt</span>
                <span className="text-xs text-slate-400 cursor-pointer hover:text-[#308ce8]">Tiếng Anh</span>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="py-8 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">© 2024 BookO Online Store. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
