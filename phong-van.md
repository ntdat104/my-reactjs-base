# Phỏng vấn

---

## 1. Đa hình (polymorphism)

- Đa hình nghĩa là có nhiều hình thái khác nhau.
- Tiêu biểu là, đa hình xuất hiện khi có một cấu trúc cấp bậc của các lớp và chúng liên quan với nhau bởi tính kế thừa.
- Một người cùng một lúc có thể có đặc điểm khác nhau. Giống như một người đàn học sinh thời là một người con trai, một người bạn, một người anh. Vì vậy, cùng một người sở hữu những hành vi khác nhau trong các tình huống khác nhau. Điều này được gọi là đa hình.

---

## 2. Phân biệt Interface và Abstract class

|                        | Interface                                                               | Abstract class                                |
| ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------- |
| Multiple inheritance   | Một class có thể hiện thực nhiều interface.(tạm coi là thừa kế)         | Không hỗ trợ đa thừa kế                       |
| Default implementation | Không thể định nghĩa code xử lý, chỉ có thể khai báo.                   | Có thể định nghĩa thân phương thức, property. |
| Access Modifiers       | Mọi phương thức, property đều mặc định là public.                       | Có thể xác định modifier.                     |
| Adding functionality   | Mọi phương thức, property của interface cần được hiện thực trong class. | Không cần thiết.                              |
| Fields and Constants   | Không                                                                   | Có                                            |

---

## 3. So sánh Overloading và Overriding

| Overloading                                              | Overriding                                           |
| -------------------------------------------------------- | ---------------------------------------------------- |
| Thể hiện đa hình tại compile time                        | Thể hiện đa hình tại runtime                         |
| Thêm hành vi cho phương thức                             | Thay đổi hành vi hiện tại của phương thức            |
| Có thể khác nhau về số lượng và kiểu dữ liệu của tham số | Số lượng và kiểu dữ liệu của tham số phải giống nhau |
| Xảy ra trong cùng một class                              | Xảy ra ở 2 class có quan hệ kế thừa                  |

```ts
import { LocalStorage } from "./local-storage.service";

export const user = new LocalStorage("user");
```

## 4. Deadlock là trạng thái xảy ra trong môi trường đa nhiệm khi hai hoặc nhiều tiến trình đi vào vòng lặp chờ tài nguyên mãi mãi.

---

## 5. Trong kiến trúc máy tính, điện toán 32-bit hay 64-bit đề cập đến luồng dữ liệu của bộ vi xử lý (CPU). Nó có nghĩa là hệ điều hành có thể sử dụng nhiều bộ nhớ máy tính cùng một lúc. Điều này làm cho hệ thống 64-bit nhanh hơn nhiều so với hệ thống 32-bit.

---

Cookie
Đây là một em khá hot gây ra nhiều tranh cãi cho mọi người. Một phần vì lỗi bảo mật này nọ. Và bản chất lưu trữ Cookie cũng là một bản ghi đơn giản gồm key, value.

Một trong những điểm khác biệt của cookie là em nó được gửi kèm theo request của browser cho nên bạn có thể truy cập và xử lý cookie ở server side dựa vào cookie được gắn kèm với request.

Một số điểm nổi bật của Cookie so với localStorage và sessionStorage là:

Khi đóng một tab, Cookie vẫn còn được lưu trên trình duyệt.
Cookie có thể mất đi sau khi đóng trình duyệt nếu nó được set expires là N/A
Cookie sẽ tự động được include vào XHR khi chúng ta gửi request REST lên API. Điều này cho phép chúng ta không cần phải tự chèn authentication info(kỹ thuật này gọi là interceptor) vào header của mỗi request. Và dựa vào cookie, server có thể nhận biết được client này đã được authenticate thành công hay chưa. Đây là lí do chính cookie khó bị thay thế bởi storage thông thường.
Cookie có option để chúng ta set ngày quá hạn cho nó. Nghĩa là có thể định nghĩa khi nào nó tự động xoá được.
Một số lưu ý khi dùng cookie:

Bị giới hạn về dung lượng lưu trữ khoảng 4KB
Nên xác định thời gian expire/max-age. Thông thường chỉ nên cho phép một cookie chứa thông tin để authenticate trong khoảng 3-4 tháng. Để tránh người dùng phải đăng nhập nhiều lần, chúng ta cung cấp một option lưu trữ thông tin để lần sau user không cần đăng nhập nữa.
Nếu cookie dùng để authenticate nên set httpOnly bằng true. Dùng cờ này để không cho phép đọc được cookie từ Javascript. Tránh được sự tấn công từ bên ngoài bằng thủ thuật scripting.
Dễ bị đánh cắp thông tin người dùng. Cho nên đừng bao giờ lưu password nguyên gốc của user mà hãy mã hoá nó, hay dùng token-based authentication.
Ở bài viết sau chúng ta sẽ cùng tìm hiểu sự phát triển của cookie-based và token-based authentication. Hiểu được hai kỹ thuật này là viên gạch đầu tiên để chúng ta xây nên một SPA với độ bảo mật cao, an toàn và hiệu suất tốt.
