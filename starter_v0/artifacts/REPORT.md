# Day 04 Lab v2 Report — Research Agent

> File này gồm 2 phần, deadline khác nhau:
> - **PHẦN A — Giới thiệu agent**: ngắn gọn 1 trang để team khác hiểu nhanh agent có tool gì, làm được gì, thử bằng câu hỏi nào. Xong trước 11:30 để làm tài liệu phụ trợ khi demo.
> - **PHẦN B — Chi tiết / Bằng chứng**: bảng đầy đủ (v0–v3, failure, eval, chat) dựa trên log thật. Có thể hoàn thiện sau buổi debate để nộp bài.

## Team

- Team:
- Members:
- Provider/model:

---

# PHẦN A — Giới thiệu agent

## A1. Agent này làm được gì

> Agent tìm kiếm và trả lời câu hỏi bằng cách kết hợp truy xuất thông tin từ Internet với khả năng tổng hợp của LLM. Agent tự lập kế hoạch tìm kiếm, tổng hợp nhiều nguồn đáng tin cậy và tạo câu trả lời có trích dẫn để đảm bảo tính chính xác và minh bạch.

Ví dụ: "Research agent: tìm tin theo từ khóa / theo tài khoản, đọc URL và tổng hợp thành digest."

**Link dùng thử (truy cập được trong showdown):**

> Dán public URL nếu người khác cần mở từ máy riêng; localhost cũng được nếu demo trực tiếp trên máy trình chiếu. Streamlit được khuyến nghị, nhưng nhóm có thể dùng bất kỳ framework nào.
>
> URL:

## A2. Tool agent có

> Liệt kê các tool agent đang dùng. Mỗi tool 1 dòng: tên + làm được gì.

| Tên tool | Làm được gì | Tool mới nhóm thêm? |
|---|---|---|
| clarify | Hỏi lại người dùng khi thiếu thông tin hoặc cần xác nhận trước hành động nhạy cảm | không |
| timeline | Lấy các bài đăng gần đây của một tài khoản X/Twitter cụ thể (theo handle) | không |
| social_search | Tìm bài đăng trên X/Twitter theo từ khóa; hỗ trợ sắp xếp Latest hoặc Top | không |
| lookup | Tìm kiếm thông tin trên web qua Tavily; hỗ trợ topic (general/news) và timeframe | không |
| fetch | Đọc toàn bộ nội dung của một URL cụ thể qua Firecrawl | không |
| format | Trình bày danh sách item đã thu thập thành markdown digest (không fetch thêm dữ liệu) | không |
| send | Gửi văn bản lên Telegram channel; chỉ gửi khi confirmed=true | không |
| policy | Tìm kiếm trong tài liệu nội bộ company policy (markdown folder) | không |
| papers | Tìm bài báo khoa học trên arXiv theo từ khóa | không |
| paper_text | Tải PDF từ arXiv và trích xuất text cục bộ bằng pypdf | không |
| reddit_search | Tìm thảo luận trên Reddit theo từ khóa hoặc subreddit cụ thể | **có** |
| github_search | Tìm repository / code trên GitHub theo từ khóa | **có** |
| semantic_scholar | Tìm bài báo học thuật đa lĩnh vực qua Semantic Scholar (rộng hơn arXiv) | **có** |
| pdf_read | Đọc và trích xuất text từ bất kỳ PDF nào có URL (không chỉ arXiv) | **có** |
| github_file | Đọc nội dung file hoặc thư mục trong một GitHub repository | **có** |
| stackoverflow | Tìm câu hỏi và câu trả lời trên Stack Overflow theo từ khóa hoặc tag | **có** |
| trending | Lấy danh sách trending topics trên X/Twitter theo quốc gia | **có** |

## A3. Câu hỏi mẫu để thử

> 3–5 câu hỏi/yêu cầu mẫu để team khác tự thử agent ngay.

1.
2.
3.

## A4. Kịch bản demo đã rehearse

> Chuẩn bị 3–5 scenario. Mỗi scenario cần cho thấy tool đã làm gì và một thay đổi cụ thể giữa các version.

| Scenario | Tool trace cần thấy | Câu chuyện cải thiện version | Fallback run/transcript |
|---|---|---|---|
|  |  |  |  |

---

# PHẦN B — Chi tiết / Bằng chứng

> Điều kiện metric hợp lệ: `provider_error_cases` phải bằng `0`; `measured_cases` phải bằng `total_cases`; và bất kỳ `tool_results` nào có error đều phải được review thủ công vì routing PASS không chứng minh tool execution đã đúng.

## B1. Version evidence

Fill from `artifacts/version_log.csv` and `runs/*.json`.

| Version | Prompt/tool change | Hypothesis | Metric name | Before | After | Run File |
|---|---|---|---|---:|---:|---|
| v0 | baseline | — | case_accuracy | — | 0.40 | v0_B_base_openrouter_20260729T103234896651.json |
| v1 |  |  |  |  |  |  |
| v2 |  |  |  |  |  |  |
| v3 |  |  |  |  |  |  |

## B2. Failure analysis

Use actual failures from `results[*].result.failures`.

| Case ID | Failure Type | Actual Tool Calls | What Failed | Fix |
|---|---|---|---|---|
| R03 | wrong_arg_value | lookup + social_search | query="AI news today latest breakthroughs" (verbose), topic=general thay vì news, gọi thêm social_search không cần | Thêm convention query=keyword ngắn, topic=news khi có "tin tức" vào `tools.yaml` |
| R05 | wrong_arg_value | timeline | limit=None thay vì 10 | Thêm convention trích limit từ số trong câu vào `tools.yaml` |
| R06 | wrong_arg_value | lookup | topic=general thay vì news, timeframe=None thay vì week | Thêm trigger "tuần này/hôm nay" → timeframe vào `tools.yaml` |
| R10 | missing_info | timeline(screenname=sama) | Đoán bừa handle thay vì gọi clarify | Thêm rule "thiếu handle → clarify bắt buộc" vào `system_prompt.md` |
| R12 | wrong_boundary | clarify(response_type=text) | Gọi đúng clarify nhưng sai response_type (text thay vì yes_no) | Thêm rule "hành động ghi → clarify(yes_no)" vào `system_prompt.md` |
| R13 | wrong_arg_value | lookup + social_search | query verbose, topic=general, timeframe=None | Cùng fix với R03/R06 trong `tools.yaml` |
| M01 | wrong_arg_value | timeline | limit=None (không carry limit=5 từ turn 1) | Thêm multi-turn carry rule vào `system_prompt.md` |
| M02 | wrong_arg_value | lookup | query="robotics news today" (verbose), topic=general | Fix tools.yaml convention + system_prompt carry rule |
| M03 | wrong_arg_value | timeline × 3 | limit=None, gọi timeline 3 lần (một cho mỗi turn) | Thêm rule "chỉ xử lý latest turn" vào `system_prompt.md` |
| M04 | missing_info | (không gọi tool) | Sau khi user cung cấp URL, latest turn xác nhận → model trả text, không gọi fetch | Thêm rule "turn xác nhận sau khi có đủ info → trigger tool" vào `system_prompt.md` |
| M05 | wrong_arg_value | timeline | limit=None (không carry limit=3 từ turn 2) | Cùng fix với M01 |
| M06 | wrong_arg_value | lookup | query="OpenAI news latest" (verbose), topic=general | Cùng fix với R03 trong `tools.yaml` |

## B3. Team eval cases

List the 10 cases added to `data/eval_group.json`:

- 5 single-turn
- 5 multi-turn

This section is for the mandatory team-authored eval set. Optional built-ins do
not belong here.

File template để trống có chủ đích; nhóm phải tự thiết kế đủ 10 case.

| Case ID | What It Tests | Expected Tool/Behavior | Result |
|---|---|---|---|
|  |  |  |  |

## B4. Live chat evidence

Use `transcripts/*.transcript.json`.

| Scenario/Turn | Version | Tool Calls + Args | Transcript/Run | Outcome |
|---|---|---|---|---|
|  |  |  |  |  |

## B5. Tool capability evidence

Phân loại rõ tool mới bắt buộc, optional built-in và tool đủ điều kiện bonus. Chỉ ghi Telegram/PDF nếu nhóm thực sự dùng; base report không cần chúng.

UI is core deliverable, not bonus. Do not list it here.

| Category | Evidence File | What Worked | Risk / Guardrail |
|---|---|---|---|
| Must-have: tool mới đầu tiên |  |  |  |
| Optional built-in |  |  |  |
| Bonus: tool mới thứ 4 trở đi |  |  |  |

## B6. Reflection

- Which fixes belonged in `system_prompt.md`?
- Which fixes belonged in `tools.yaml`?
- Which failure needed manual review instead of automatic grading?
- What would you improve next?
