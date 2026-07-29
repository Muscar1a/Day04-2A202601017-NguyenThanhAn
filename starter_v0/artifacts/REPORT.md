# Day 04 Lab v2 Report — Research Agent

> File này gồm 2 phần, deadline khác nhau:
> - **PHẦN A — Giới thiệu agent**: ngắn gọn 1 trang để team khác hiểu nhanh agent có tool gì, làm được gì, thử bằng câu hỏi nào. Xong trước 11:30 để làm tài liệu phụ trợ khi demo.
> - **PHẦN B — Chi tiết / Bằng chứng**: bảng đầy đủ (v0–v3, failure, eval, chat) dựa trên log thật. Có thể hoàn thiện sau buổi debate để nộp bài.

## Team

- Team:
- Members:
- Provider/model: OpenRouter (inclusionai/ling-3.0-flash:free)

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
| v0 | | | tool_routing_accuracy | — | 0.80 | |
| v0 | | | argument_accuracy | — | 0.40 | |
| v0 | | | multiturn_accuracy | — | 0.00 | |
| v1 | tools.yaml: convention query=keyword ngắn, topic/timeframe trigger, name→handle map, trích limit | tools.yaml descriptions sẽ guide model → fix R03/R06/R13 (verbose) và R05/M01/M05 (limit=None) | case_accuracy | 0.40 | 0.40 | v1_B_base_openrouter_20260729T110327146831.json |
| v1 | | | tool_routing_accuracy | 0.80 | 0.70 | |
| v1 | | | argument_accuracy | 0.40 | 0.40 | |
| v1 | | | multiturn_accuracy | 0.00 | 0.00 | |
| v2 | system_prompt.md: tool routing rules, clarify boundary (thiếu handle/URL→text; ghi→yes_no), arg rules (handle map, limit, query ngắn, topic/timeframe), multi-turn carry | Clarify rules fix R10/R12; arg rules fix R05/R06; carry rules fix M01-M06 | case_accuracy | 0.40 | 0.55 | v2_B_base_openrouter_20260729T115719583464.json |
| v2 | | | tool_routing_accuracy | 0.70 | 0.80 | |
| v2 | | | argument_accuracy | 0.40 | 0.55 | |
| v2 | | | multiturn_accuracy | 0.00 | 0.1667 | |
| v3 | system_prompt.md: thêm CRITICAL RULES (limit/timeframe/clarify yes_no/multi-turn trigger). tools.yaml: viết lại description của clarify/timeline/lookup với convention nhúng trực tiếp | CRITICAL RULES sẽ fix toàn bộ 9 cases FAIL v2; dự báo case_accuracy ≥ 0.90 | case_accuracy | 0.55 | 0.5789 | v3_B_base_openrouter_20260729T121419257606.json |
| v3 | | | tool_routing_accuracy | 0.80 | 0.8421 | |
| v3 | | | argument_accuracy | 0.55 | 0.5789 | |
| v3 | | | multiturn_accuracy | 0.1667 | 0.40 | (19/20 measured; M06 provider error) |

## B2. Failure analysis

Dữ liệu từ `results[*].result.failures` của v2 (baseline failure) và v3 (sau fix).

| Case ID | Failure Type v2 | Failure Type v3 | What Failed (v3 log) | Trạng thái |
|---|---|---|---|---|
| R01 | wrong_tool | wrong_tool | missing tool call timeline (model trả về null thay vì gọi tool) | ❌ Vẫn fail |
| R03 | wrong_tool | wrong_tool | lookup đúng (query=AI, timeframe=day, topic=news) nhưng gọi thêm `trending` không cần | ❌ Regression mới |
| R04 | — | wrong_tool | missing tool call fetch (model không gọi tool) | ❌ Mới xuất hiện v3 |
| R05 | wrong_arg_value | wrong_arg_value | limit=None thay vì 10 — CRITICAL RULE #1 không được follow | ❌ Vẫn fail |
| R12 | wrong_boundary | wrong_boundary | clarify(response_type=text) thay vì yes_no — CRITICAL RULE #3 không được follow | ❌ Vẫn fail |
| M01 | wrong_arg_value | wrong_arg_value | limit=None (không carry limit=5 từ turn 1) | ❌ Vẫn fail |
| M02 | missing_tool_call | — | **FIX**: lookup(query=robotics, timeframe=day, topic=news) đúng hoàn toàn | ✅ Đã fix |
| M03 | wrong_arg_value | wrong_arg_value | limit=None (không carry limit=3 từ turn cuối) | ❌ Vẫn fail |
| M04 | missing_tool_call | — | **FIX**: fetch(url=https://anthropic.com/news/claude) đúng hoàn toàn | ✅ Đã fix |
| M05 | wrong_arg_value | wrong_arg_value | limit=None (không carry limit=3 sau khi đổi từ 10→3) | ❌ Vẫn fail |
| M06 | missing_tool_call | provider_error | Rate limit error — không đo được | ⚠️ Provider error |

**Nhận xét từ log thực tế:**
- CRITICAL RULES giúp fix M02 và M04 (multi-turn trigger) — 2/9 cases được cải thiện.
- `limit` vẫn là điểm yếu cốt lõi: model `inclusionai/ling-3.0-flash:free` liên tục bỏ qua `limit` dù đã có rule và description rõ ràng → khả năng do model tier thấp không follow instruction tốt.
- R03 sinh lỗi mới: model gọi thêm `trending` (extra tool) — CRITICAL RULES không ngăn được over-calling.
- R12 (`clarify yes_no`) vẫn sai dù đã nhúng vào description — model ưu tiên hỏi nội dung trước thay vì xác nhận.

## B3. Team eval cases

10 cases nhóm tự viết trong `data/eval_group.json` — tập trung vào 2 tool mới: `reddit_search` và `pdf_read`.

**Single-turn (5 cases):**

| Case ID | What It Tests | Expected Tool + Args | Difficulty |
|---|---|---|---|
| G01_reddit_routing | Thảo luận cộng đồng Reddit → `reddit_search`, không phải `social_search` hay `lookup` | `reddit_search(query="ChatGPT")` | medium |
| G02_reddit_subreddit_sort_arg | "hot nhất" → `sort=hot`; "subreddit MachineLearning" → `subreddit` arg, không để vào query | `reddit_search(query="AI", subreddit="MachineLearning", sort="hot")` | medium |
| G03_reddit_limit_arg | "3 bài" → `limit=3`; "mới nhất" → `sort=new`; subreddit truyền đúng | `reddit_search(query="Python", subreddit="learnpython", sort="new", limit=3)` | medium |
| G04_pdf_read_url_given | Đã có URL file `.pdf` → `pdf_read`, không phải `fetch` hay `paper_text` | `pdf_read(url="https://arxiv.org/pdf/1706.03762.pdf")` | medium |
| G05_pdf_read_max_pages_arg | "3 trang đầu" → `max_pages=3`, không dùng default 5 | `pdf_read(url="https://arxiv.org/pdf/2303.08774.pdf", max_pages=3)` | easy |

**Multi-turn (5 cases):**

| Case ID | What It Tests | Expected Tool + Args (turn cuối) | Difficulty |
|---|---|---|---|
| G06_pdf_read_after_url | Turn 1 thiếu URL → clarify; turn 2 cung cấp URL → gọi `pdf_read` ngay, không hỏi lại | `pdf_read(url="https://arxiv.org/pdf/1706.03762.pdf")` | medium |
| G07_reddit_carry_subreddit | Carry `subreddit="learnpython"` từ turn 1; chỉ cập nhật `query="JavaScript"` | `reddit_search(query="JavaScript", subreddit="learnpython")` | hard |
| G08_reddit_sort_update | Carry `query="machine learning"`; cập nhật `sort: new → top` | `reddit_search(query="machine learning", sort="top")` | medium |
| G09_lookup_then_reddit_switch | Turn 2 chuyển nguồn sang Reddit → `reddit_search`, carry query, không gọi lại `lookup` | `reddit_search(query="OpenAI")` | hard |
| G10_pdf_carry_url_update_pages | Carry `url` từ turn 1; cập nhật `max_pages: 2 → 5` | `pdf_read(url="https://arxiv.org/pdf/2303.08774.pdf", max_pages=5)` | hard |

## B4. Live chat evidence

Bằng chứng phiên tương tác trực tiếp (live chat session) lưu tại `starter_v0/transcripts/v3_gemini_20260729T121158133862.transcript.json` (chạy với version `v3`, provider `gemini` / model `gemma-4-26b-a4b-it`):

| Scenario/Turn | Version | Tool Calls + Args | Transcript/Run | Outcome |
|---|---|---|---|---|
| Turn 1: *"Tin AI hôm nay có gì nổi bật?"* | v3 | *(Không gọi được tool do lỗi provider)* | `transcripts/v3_gemini_20260729T121158133862.transcript.json` | ❌ Provider Error: 429 RESOURCE_EXHAUSTED (Quota exceeded for gemma-4-26b) |
| Turn 2: *"Tóm tắt 5 tweet mới nhất của @karpathy giúp mình"* | v3 | 1. `timeline(screenname="karpathy", limit=5)`<br>2. `format(template="bullets", headline="...", items=[...])` | `transcripts/v3_gemini_20260729T121158133862.transcript.json` | ✅ Success: Gọi đúng tool `timeline` trích đúng `screenname="karpathy"`, `limit=5`, sau đó gọi `format` hiển thị dạng danh sách bullets. |

## B5. Tool capability evidence

Phân loại rõ tool mới bắt buộc, optional built-in và tool đủ điều kiện bonus. Chỉ ghi Telegram/PDF nếu nhóm thực sự dùng; base report không cần chúng.

UI is core deliverable, not bonus. Do not list it here.

| Category | Evidence File | What Worked | Risk / Guardrail |
|---|---|---|---|
| Must-have: tool mới đầu tiên |  |  |  |
| Optional built-in |  |  |  |
| Bonus: tool mới thứ 4 trở đi |  |  |  |

## B6. Reflection

**Fixes thuộc về `system_prompt.md`:**
- Quy tắc `clarify yes_no` cho write-action (R12): cần instruction-level priority, không chỉ description.
- Multi-turn trigger (M02, M04): rule "khi đủ info → gọi tool ngay" cần nằm ở system_prompt để model xử lý context.
- Carry rules (M01, M03, M05): limit và handle phải được carry qua turns bằng instruction rõ ràng.

**Fixes thuộc về `tools.yaml`:**
- `timeframe` trigger (R03, R13, R06): description nhúng trực tiếp mapping "hôm nay→day" hiệu quả hơn system_prompt vì gần context tool call.
- `query` ngắn gọn (R03, R13): convention trong description giúp model chọn args đúng format.

**Failures cần manual review thay vì auto-grading:**
- R01 v3: model trả `actual_text=null` và không gọi tool — không rõ là model bị timeout hay skip. Cần xem raw response.
- R03 v3: gọi thêm `trending` — grader đánh fail nhưng `lookup` args đúng hoàn toàn; có thể cân nhắc partial credit.
- R08, R14 (out_of_scope): model trả lời câu toán/code thay vì từ chối — grader đánh pass nhưng behavior sai với intent.

**Cải thiện tiếp theo:**
- Đổi model sang tier cao hơn (không phải `:free`) để giảm rate limit và cải thiện instruction-following cho `limit`.
- Thêm few-shot examples vào system_prompt cho rule `limit` — ví dụ inline "Lấy 5 tweet" → `timeline(screenname=..., limit=5)`.
- Thêm rule chống over-calling (extra tool call như `trending` trong R03) vào system_prompt.
- Viết thêm eval cases đo `limit` riêng để xác nhận fix.
