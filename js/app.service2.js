// (function() {
//     "use strict";

//     angular.module("NccuCourseSearch")      
//         .service("CourseSearchService", CourseSearchService)
       

//     function CourseSearchService() {
//         var service = this;

       

//         var courses = [
//             [{ "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "政治系", "courseId": "000211-01-2", "name": "政治學", "category": 2, "required": "必", "credit": 3, "teacher": "蔡中民", "week": "三", "time": "234", "classroom": "大勇210104", "quantity": 83, "remark": "政治系優先。", "": null },
//                 { "way": "", "zhiyuan": "", "language": "中文", "department": "政治系", "courseId": "000226-02-1", "name": "政治學", "category": 1, "required": "必", "credit": 3, "teacher": "韋洪武", "week": "四", "time": "D56", "classroom": "綜合270202", "quantity": 42, "remark": "", "": null },
//                 { "way": "", "zhiyuan": "", "language": "中文", "department": "外交系", "courseId": "000220-04-1", "name": "國際關係", "category": 1, "required": "必", "credit": 3, "teacher": "邱稔壤", "week": "三", "time": "234", "classroom": "綜合270204", "quantity": 74, "remark": "", "": null },
//                 { "way": "", "zhiyuan": "", "language": "英文", "department": "外交系", "courseId": "000220-05-1", "name": "國際關係", "category": 1, "required": "必", "credit": 3, "teacher": "蘇卓馨", "week": "二", "time": "234", "classroom": "綜合270309", "quantity": 66, "remark": "", "": null },
//                 { "way": "", "zhiyuan": "", "language": "中文", "department": "社會系", "courseId": "000216-01-1", "name": "社會學", "category": 1, "required": "選", "credit": 3, "teacher": "林佳瑩", "week": "四", "time": "D56", "classroom": "綜合270409", "quantity": 80, "remark": "", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "社會系", "courseId": "000225-00-2", "name": "社會學", "category": 2, "required": "必", "credit": 3, "teacher": "馬藹萱", "week": "二", "time": "123", "classroom": "大智190304", "quantity": 68, "remark": "本課程有TA討論課二4，社會系大一及雙修必修課，修此課者，初選系統自動轉檔「社會學實習課」。", "": null },
//                 { "way": "轉檔", "zhiyuan": "", "language": "中文", "department": "社會系", "courseId": "000225-01-2", "name": "社會學", "category": 2, "required": "必", "credit": 3, "teacher": "陳宗文", "week": "二", "time": "234", "classroom": "綜合270114", "quantity": 30, "remark": "社會系輔系生課程。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "財政系", "courseId": "000221-00-2", "name": "財政學", "category": 2, "required": "必", "credit": 3, "teacher": "黃智聰", "week": "二", "time": "234", "classroom": "綜合270104", "quantity": 55, "remark": "經濟系優先", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "財政系", "courseId": "000221-01-2", "name": "財政學", "category": 2, "required": "必", "credit": 3, "teacher": "陳國樑", "week": "三", "time": "234", "classroom": "大智190305", "quantity": 93, "remark": "經濟系優先/建議先修過微積分 。若要加簽者，請至財政系系辦詢問。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "財政系", "courseId": "000221-02-2", "name": "財政學", "category": 2, "required": "必", "credit": 3, "teacher": "徐麗振", "week": "三", "time": "D56", "classroom": "綜合270104", "quantity": 61, "remark": "財政系優先/財二必修/非財政系學生強烈建議先修過微積分。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "財政系", "courseId": "000221-03-2", "name": "財政學", "category": 2, "required": "必", "credit": 3, "teacher": "陳香梅", "week": "二", "time": "234", "classroom": "大智190305", "quantity": 87, "remark": "財政系優先/財二必修/非財政系之學生，強烈建議先修過微積分", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "公行系", "courseId": "000224-00-1", "name": "行政學", "category": 1, "required": "選", "credit": 3, "teacher": "張鎧如", "week": "三", "time": "D56", "classroom": "綜合270204", "quantity": 36, "remark": "", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000213-00-2", "name": "經濟學", "category": 2, "required": "必", "credit": 2, "teacher": "李為楨等", "week": "三", "time": "78", "classroom": "綜合270415", "quantity": 57, "remark": "法律系學生優先", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000213-01-2", "name": "經濟學", "category": 2, "required": "必", "credit": 2, "teacher": "丁秀吟", "week": "三", "time": "34", "classroom": "綜合270209", "quantity": 59, "remark": "地政系土管土資一學生優先", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000215-01-2", "name": "貨幣銀行學", "category": 2, "required": "必", "credit": 3, "teacher": "方中柔", "week": "五", "time": "234", "classroom": "綜合270114", "quantity": 173, "remark": "", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000215-02-2", "name": "貨幣銀行學", "category": 2, "required": "必", "credit": 3, "teacher": "林馨怡", "week": "二", "time": "234", "classroom": "大勇210105", "quantity": 121, "remark": "第一次上課請務必出席", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000215-03-2", "name": "貨幣銀行學", "category": 2, "required": "必", "credit": 3, "teacher": "黃俞寧", "week": "四", "time": "D56", "classroom": "綜合270415", "quantity": 72, "remark": "", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "英文", "department": "經濟系", "courseId": "000215-04-2", "name": "貨幣銀行學", "category": 2, "required": "必", "credit": 3, "teacher": "賴廷緯", "week": "五", "time": "234", "classroom": "綜合270212", "quantity": 14, "remark": "本課程為英語授課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "英文", "department": "經濟系", "courseId": "000217-00-2", "name": "個體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "江品慧", "week": "二", "time": "234", "classroom": "綜合270403", "quantity": 28, "remark": "本課程英語授課，另有實習課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000217-01-2", "name": "個體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "陳鎮洲", "week": "三", "time": "234", "classroom": "資訊140206", "quantity": 150, "remark": "本課程有實習課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000217-02-2", "name": "個體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "李慧琳", "week": "一", "time": "D56", "classroom": "大勇210106", "quantity": 63, "remark": "本課程有實習課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000217-03-2", "name": "個體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "徐麗振", "week": "二", "time": "D56", "classroom": "大智190101", "quantity": 81, "remark": "財政系學生優先 ，實習課時間：一C。若找不到合適助教，則本課程無實習課。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "英文", "department": "經濟系", "courseId": "000218-00-2", "name": "總體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "莊奕琦", "week": "五", "time": "234", "classroom": "綜合270315", "quantity": 40, "remark": "本課程為英語授課，另有實習課時間", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000218-01-2", "name": "總體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "洪福聲", "week": "二", "time": "234", "classroom": "大勇210104", "quantity": 102, "remark": "本課程有實習課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000218-02-2", "name": "總體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "蕭明福", "week": "四", "time": "234", "classroom": "大勇210105", "quantity": 123, "remark": "本課程有實習課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000218-04-2", "name": "總體經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "林其昂", "week": "二", "time": "234", "classroom": "綜合270315", "quantity": 16, "remark": "財政系學生優先，本課程有實習課。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000219-00-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "翁永和", "week": "三", "time": "234", "classroom": "資訊140306", "quantity": 179, "remark": "經濟一乙學生優先，實習課時間：四C。下學期由翁永和老師授課。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000219-01-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "朱美麗", "week": "四", "time": "234", "classroom": "資訊140206", "quantity": 78, "remark": "經濟一甲學生優先，本課程有實習課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000219-02-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "翁永和", "week": "四", "time": "D56", "classroom": "綜合270113", "quantity": 181, "remark": "外交系及資管系學生優先，實習課時間：三C。", "": null },
//                 { "way": "轉檔", "zhiyuan": "", "language": "英文", "department": "經濟系", "courseId": "000219-03-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "王信實", "week": "五", "time": "234", "classroom": "綜合270109", "quantity": 15, "remark": "本課程為英語授課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000219-04-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "陳心蘋", "week": "三", "time": "D56", "classroom": "大智190305", "quantity": 104, "remark": "本課程有實習課", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000219-06-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "林祖嘉", "week": "二", "time": "234", "classroom": "綜合270409", "quantity": 27, "remark": "公行系學生優先", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000219-08-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "廖郁萍", "week": "五", "time": "234", "classroom": "綜合270312", "quantity": 56, "remark": "", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "經濟系", "courseId": "000219-11-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "胡偉民", "week": "一", "time": "D56", "classroom": "大勇210105", "quantity": 92, "remark": "財政系學生優先，本課程有實習課。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "英文", "department": "國貿系", "courseId": "000219-51-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "吳文傑", "week": "一", "time": "D56", "classroom": "大勇210103", "quantity": 178, "remark": "ETP優先，英語授課。106.6.17上午舉行會考，修課學生皆須參加會考，無法參加同學請勿修讀。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "國貿系", "courseId": "000219-52-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "郭炳伸", "week": "一", "time": "567", "classroom": "寶來科技廳", "quantity": 37, "remark": "外語學程優先。106.6.17上午舉行會考，修課學生皆須參加會考，無法參加同學請勿修讀。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "國貿系", "courseId": "000219-53-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "林信助", "week": "二", "time": "234", "classroom": "大勇210103", "quantity": 146, "remark": "貿一甲,會一乙,企一甲優先。106.6.17上午舉行會考，修課學生皆須參加會考，無法參加同學請勿修讀。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "國貿系", "courseId": "000219-54-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "鄭鴻章", "week": "二", "time": "234", "classroom": "資訊140201", "quantity": 93, "remark": "貿一乙,企一乙,財管系優先。106.6.17上午舉行會考，修課學生皆須參加會考，無法參加同學請勿修讀。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "國貿系", "courseId": "000219-55-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "饒秀華", "week": "三", "time": "234", "classroom": "商館260306", "quantity": 105, "remark": "會一甲優先。106.6.17上午舉行會考，修課學生皆須參加會考，無法參加同學請勿修讀。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "英文", "department": "國貿系", "courseId": "000219-56-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "荒井夏來", "week": "三", "time": "D56", "classroom": "商館260210", "quantity": 35, "remark": "106.6.17上午舉行會考，修課學生皆須參加會考，無法參加同學請勿修讀。", "": null },
//                 { "way": "轉檔", "zhiyuan": "☆", "language": "中文", "department": "國貿系", "courseId": "000219-58-2", "name": "經濟學", "category": 2, "required": "必", "credit": 3, "teacher": "溫偉任", "week": "五", "time": "234", "classroom": "研究250103", "quantity": 140, "remark": "統計系，風管系優先。106.6.17上午舉行會考，修課學生皆須參加會考，無法參加同學請勿修讀。                                   10", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000314-01-1", "name": "初級會計學（一）", "category": 1, "required": "必", "credit": 3, "teacher": "諶家蘭等", "week": "二", "time": "234", "classroom": "商館260311", "quantity": 49, "remark": "", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-00-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "周玲臺", "week": "一", "time": "D56", "classroom": "研究250105", "quantity": 41, "remark": "擋修初會（一），國貿一甲，實習課三CD", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-01-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "張祐慈等", "week": "一", "time": "D56", "classroom": "研究250201", "quantity": 56, "remark": "擋修初會（一），國貿一乙", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "英文", "department": "會計系", "courseId": "000318-02-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "張祐慈等", "week": "一", "time": "EFG", "classroom": "研究250206", "quantity": 36, "remark": "擋修初會（一），英文授課，ETP優先。", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-03-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "廖柏蒼", "week": "二", "time": "234", "classroom": "研究250206", "quantity": 65, "remark": "擋修初會（一）", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-04-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "何怡澄", "week": "二", "time": "234", "classroom": "資訊140206", "quantity": 93, "remark": "擋修初會（一），財政一甲，實習課二1", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "英文", "department": "會計系", "courseId": "000318-05-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "張祐慈等", "week": "二", "time": "34C", "classroom": "研究250201", "quantity": 20, "remark": "擋修初會（一），英文授課，ETP優先。", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-06-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "陳宇紳等", "week": "二", "time": "78E", "classroom": "研究250206", "quantity": 60, "remark": "擋修初會（一），財管一", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-07-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "何怡澄", "week": "三", "time": "234", "classroom": "研究250103", "quantity": 115, "remark": "擋修初會（一），財政一乙，實習課三1。", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "英文", "department": "會計系", "courseId": "000318-08-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "潘健民", "week": "三", "time": "234", "classroom": "商館260105", "quantity": 49, "remark": "擋修初會（一），ETP優先，英語授課。", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-09-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "林禹銘", "week": "一", "time": "EFG", "classroom": "大勇210103", "quantity": 136, "remark": "擋修初會（一）", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-10-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "郭弘卿", "week": "三", "time": "D56", "classroom": "學思040202", "quantity": 121, "remark": "擋修初會（一）", "": null },
//                 { "way": "", "zhiyuan": "☆", "language": "中文", "department": "會計系", "courseId": "000318-11-1", "name": "初級會計學（二）", "category": 1, "required": "必", "credit": 3, "teacher": "廖柏蒼", "week": "三", "time": "D56", "classroom": "研究250101", "quantity": 69, "remark": "擋修初會（一）", "": null }
//             ]
//         ];
//         var a = function() {
//             console.log(courses[0][1]);
//         }
//         a();


//     }

// })();
