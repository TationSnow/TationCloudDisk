# TationCloud 原型说明

日期：2026-04-07

## 当前状态
- 桌面端主流程已具备：首页、文件、预览 / 上传、会员 / 账单、分享、通知、版本、回收站等页面可串联。
- 本轮重点完善移动端，已从“一级列表页”补成“一级入口 + 二级详情 + 关键操作页”的完整闭环。
- 默认浅色模式；原型保留深色模式入口与主题切换语义，移动端新增“主题与语言”详情页承接这一能力。

## 移动端主入口
- 底部导航固定为：首页 / 文件 / 分享 / 设置，中央为上传主动作。
- 当前选定方案：`Variant C / Utility Tray`，已应用到移动主流程页面用于整套预览。
- 方案 C 已调整为直角外框，中央上传按钮仅保留图标，不再显示“上传”文字。
- 对比方案保留：`Variant A / Floating Dock`、`Variant B / Split Rail`，集中放在 `Mobile / Nav Variants` 画板中供风格对照。

## 移动端页面地图
- 一级与主流程页：Home、Files、Preview、Upload、Share、Membership、Settings、Trash、Notifications、Billing、Versions、Login。
- 文件域二级页：File Detail、File Filters、Bulk Actions、Unlock Help、File Meta。
- 上传域二级页：Upload Task Detail、Encryption Settings。
- 分享域二级页：Share Detail、Recipient Detail。
- 会员与账单域二级页：Subscription Detail、Billing Detail、Invoice Detail。
- 通知与版本域二级页：Notification Detail、Version Detail、Version Compare、Restore Confirm。
- 设置域二级页：Security & Devices、Theme & Language、Notification Preferences。
- 回收站二级页：Trash Detail。

## 底栏显示策略
- 保留底栏：所有移动主流程页，以及轻量二级页 `File Filters`、`Theme & Language`、`Notification Preferences`。
- 隐藏底栏：其余深层详情页、版本对比页、恢复确认页、账单详情页等聚焦页面，统一使用 `Mobile Detail Header` 返回。

## 用户可完成的事
- 从首页进入最近文件、查看空间与套餐状态。
- 在文件页以双列网格浏览文件，进行排序、筛选、批量操作，并继续进入预览、元信息与解锁帮助。
- 在上传中心查看任务进度、续传状态与加密上传设置。
- 在分享页查看链接状态、访问权限和接收人行为。
- 在会员、账单与发票页查看订阅、订单、支付与归档路径。
- 在通知、版本与回收站页完成通知跟进、版本对比 / 恢复、回收项恢复。
- 在设置页管理安全设备、主题语言和通知偏好。

## 原型补充说明
- 文件浏览采用“目录上下文 + 排序筛选 + 双列文件卡片网格 + 长按批量提示”的移动方案。
- 分享、账单、版本、通知等页面都已补出“下一步动作”，不再停留在展示层。
- 会员与加密语义保持统一：`SVIP` 对应加密上传、在线解锁、版本恢复、多设备同步等高级能力。
- 发票与订单支持“归档到云盘 / 发票资料夹”的产品语义，便于和文件系统衔接。

## 校验结果
- 已检查导航对比区、主流程页、代表性详情页截图。
- 已执行布局快照检查，当前结果为 `No layout problems.`。
