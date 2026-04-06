export type AppLayout = 'landing' | 'desktop' | 'app' | 'auth';
export type SectionKey =
  | 'landing'
  | 'desktop-home'
  | 'desktop-files'
  | 'desktop-recent'
  | 'desktop-search'
  | 'desktop-preview'
  | 'desktop-upload'
  | 'desktop-membership'
  | 'desktop-settings'
  | 'desktop-share'
  | 'desktop-trash'
  | 'desktop-notifications'
  | 'desktop-transfer'
  | 'desktop-versions'
  | 'desktop-billing'
  | 'desktop-folder'
  | 'desktop-states'
  | 'desktop-shared'
  | 'app-home'
  | 'app-files'
  | 'app-preview'
  | 'app-upload'
  | 'app-share'
  | 'app-membership'
  | 'app-trash'
  | 'app-settings'
  | 'auth-login'
  | 'auth-register'
  | 'auth-recover';

export interface NavItem {
  label: string;
  path: string;
  hint?: string;
}

export interface ActionLink {
  label: string;
  path: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface HeroBlock {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primary: ActionLink;
  secondary?: ActionLink;
  tags?: string[];
}

export interface StatItem {
  label: string;
  value: string;
  hint?: string;
}

export interface ListItem {
  title: string;
  meta: string;
  status?: string;
  tone?: 'success' | 'warning' | 'danger' | 'muted';
  path?: string;
}

export interface CardItem {
  title: string;
  meta: string;
  body?: string;
  badge?: string;
  tone?: 'mint' | 'sky' | 'sun' | 'violet';
  path?: string;
}

export interface ProgressItem {
  title: string;
  meta: string;
  progress: number;
  status?: string;
}

export interface TimelineItem {
  title: string;
  meta: string;
  body?: string;
  path?: string;
}

export interface PanelPreset {
  main: Array<
    | { kind: 'metric'; title: string; note?: string; value: string; accent?: 'primary' | 'mint' | 'sky' | 'sun' | 'violet' }
    | { kind: 'list'; title: string; note?: string; items: ListItem[] }
    | { kind: 'cards'; title: string; note?: string; columns?: 2 | 3; items: CardItem[] }
    | { kind: 'progress'; title: string; note?: string; items: ProgressItem[] }
    | { kind: 'timeline'; title: string; note?: string; items: TimelineItem[] }
  >;
  rail: Array<
    | { kind: 'metric'; title: string; note?: string; value: string; accent?: 'primary' | 'mint' | 'sky' | 'sun' | 'violet' }
    | { kind: 'list'; title: string; note?: string; items: ListItem[] }
    | { kind: 'cards'; title: string; note?: string; columns?: 2 | 3; items: CardItem[] }
    | { kind: 'progress'; title: string; note?: string; items: ProgressItem[] }
    | { kind: 'timeline'; title: string; note?: string; items: TimelineItem[] }
    | { kind: 'chips'; title: string; links: NavItem[] }
  >;
}

export interface AuthConfig {
  tabs: NavItem[];
  bullets: string[];
  fields: { label: string; placeholder: string }[];
  primary: ActionLink;
  helperLinks: NavItem[];
  note: string;
}

export interface PageConfig {
  id: string;
  path: string;
  layout: AppLayout;
  section: SectionKey;
  device?: 'desktop' | 'app';
  navKey?: string;
  breadcrumb?: string;
  title: string;
  subtitle: string;
  hero?: HeroBlock;
  stats?: StatItem[];
  quickLinks?: NavItem[];
  auth?: AuthConfig;
}

export const desktopNav: NavItem[] = [
  { label: '首页', path: '/desktop/home' },
  { label: '文件', path: '/desktop/files' },
  { label: '最近', path: '/desktop/recent' },
  { label: '分享', path: '/desktop/share' },
  { label: '会员', path: '/desktop/membership' },
  { label: '设置', path: '/desktop/settings' },
  { label: '回收站', path: '/desktop/trash' },
];

export const appNav: NavItem[] = [
  { label: '首页', path: '/app/home' },
  { label: '文件', path: '/app/files' },
  { label: '分享', path: '/app/share' },
  { label: '设置', path: '/app/settings' },
];

export const desktopSupportLinks: NavItem[] = [
  { label: '通知中心', path: '/desktop/notifications' },
  { label: '传输', path: '/desktop/transfer' },
  { label: '版本', path: '/desktop/versions' },
  { label: '账单', path: '/desktop/billing' },
  { label: '文件夹', path: '/desktop/folder' },
  { label: '状态案例', path: '/desktop/states' },
  { label: '共享', path: '/desktop/shared' },
];

export const appSupportLinks: NavItem[] = [
  { label: '预览', path: '/app/preview' },
  { label: '上传', path: '/app/upload' },
  { label: '会员', path: '/app/membership' },
  { label: '回收站', path: '/app/trash' },
  { label: '登录', path: '/app/auth' },
];

const authTabs: NavItem[] = [
  { label: '登录', path: '/desktop/auth' },
  { label: '注册', path: '/desktop/auth/register' },
  { label: '找回', path: '/desktop/auth/recover' },
];

const recentFiles: ListItem[] = [
  { title: 'TationCloud_素材包.zip', meta: '压缩包 · 2.1 GB · 加密中', status: '上传中', tone: 'warning', path: '/desktop/upload' },
  { title: '旅行视频.mov', meta: '视频 · 840 MB · 待解锁', status: '待解锁', tone: 'muted', path: '/desktop/preview' },
  { title: '方案说明.pdf', meta: '文档 · 24 MB · 已分享', status: '已分享', tone: 'success', path: '/desktop/share' },
];

const recentActivity: TimelineItem[] = [
  { title: '旧版演示.mov', meta: '视频 · 今天 09:10', body: '已进入回收站，等待恢复或彻底删除。', path: '/desktop/trash' },
  { title: '临时截图.png', meta: '图片 · 昨天 18:22', body: '同步到桌面端和 App 端预览页。', path: '/desktop/preview' },
  { title: '过期分享链接', meta: '链接 · 昨天 15:40', body: '仅保留展示态，不包含真实鉴权。', path: '/desktop/share' },
];

const membershipCards: CardItem[] = [
  { title: 'VIP', meta: '适合轻量个人存储', body: '基础容量、基础上传速度与分享能力。', badge: '入门', tone: 'mint', path: '/desktop/membership' },
  { title: 'SVIP', meta: '适合长期备份与协作', body: '更大容量、批量操作和优先通道。', badge: '推荐', tone: 'sky', path: '/desktop/membership' },
  { title: '企业版', meta: '适合需要统一管理的团队', body: '展示为概念位，不包含真实计费逻辑。', badge: '扩展', tone: 'violet', path: '/desktop/billing' },
];

const settingsCards: CardItem[] = [
  { title: '语言与主题', meta: '中 / EN 与浅色 / 深色切换', body: '切换会同步到顶部按钮和浏览器本地状态。', badge: '外观', tone: 'mint', path: '/desktop/settings' },
  { title: '安全选项', meta: '密码、密钥、设备绑定', body: '仅用展示卡片表现安全中心的层次感。', badge: '安全', tone: 'sky', path: '/desktop/settings' },
  { title: '同步设备', meta: '桌面端、手机端与网页端', body: '显示已连接设备数量与同步概况。', badge: '设备', tone: 'sun', path: '/desktop/settings' },
];

const stateCards: CardItem[] = [
  { title: '空态', meta: '没有文件、没有搜索结果、没有通知', body: '用于展示布局占位。', badge: 'Empty', tone: 'mint' },
  { title: '异常态', meta: '网络中断、权限失败、加密锁定', body: '用于提示错误但不阻断浏览。', badge: 'Error', tone: 'sun' },
  { title: '加载态', meta: '骨架屏、进度条、占位文本', body: '用于演示状态过渡。', badge: 'Loading', tone: 'sky' },
];

const fileCards: CardItem[] = [
  { title: '工作文件夹', meta: '32 个项目 · 最近更新', body: '承载日常同步与整理。', badge: 'Folder', tone: 'mint', path: '/desktop/folder' },
  { title: '共享链接', meta: '14 条有效 · 2 条过期', body: '跨设备分享入口。', badge: 'Share', tone: 'sky', path: '/desktop/share' },
  { title: '版本历史', meta: '按修改时间排序', body: '保留近阶段的版本轨迹。', badge: 'Version', tone: 'violet', path: '/desktop/versions' },
];

const billingItems: ListItem[] = [
  { title: 'SVIP 月度账单', meta: '¥18 / 月 · 已生效', status: '已支付', tone: 'success', path: '/desktop/membership' },
  { title: '容量加购', meta: '2 TB · 共享给当前账号', status: '已启用', tone: 'muted' },
  { title: '下次扣费', meta: '2026-05-06 · 提前提醒', status: '提醒', tone: 'warning' },
];

const notificationItems: ListItem[] = [
  { title: '新设备登录', meta: '今天 09:20 · Windows 桌面端', status: '提醒', tone: 'warning', path: '/desktop/settings' },
  { title: '分享链接已复制', meta: '昨天 17:40 · 方案说明.pdf', status: '已读', tone: 'success', path: '/desktop/share' },
  { title: 'SVIP 即将到期', meta: '昨天 12:12 · 已加入账单页', status: '已读', tone: 'muted', path: '/desktop/billing' },
];

const transferItems: ProgressItem[] = [
  { title: '素材包上传', meta: '2.1 GB · 加密中', progress: 48, status: '可暂停' },
  { title: '旅行视频下载', meta: '840 MB · 等待解锁', progress: 76, status: '断点续传' },
  { title: '同步到 App', meta: '18 个文件 · 已完成', progress: 100, status: '完成' },
];

const versionItems: TimelineItem[] = [
  { title: 'v4.2.0', meta: '今天 10:10', body: '用于展示“版本历史”页面的最新记录。', path: '/desktop/versions' },
  { title: 'v4.1.3', meta: '昨天 18:00', body: '上一版保留用于对比。', path: '/desktop/versions' },
  { title: 'v4.0.0', meta: '本周 08:30', body: '里程碑版本，带来更清晰的结构。', path: '/desktop/versions' },
];

const folderItems: CardItem[] = [
  { title: '项目资料', meta: '文件夹层级清晰', body: '适合归档文档与演示素材。', badge: '主目录', tone: 'mint', path: '/desktop/files' },
  { title: '备份相册', meta: '按月份分组', body: '图片与视频独立存放。', badge: '图库', tone: 'sky', path: '/desktop/files' },
  { title: '临时收集', meta: '待整理内容', body: '先进入文件夹页再分发到各端。', badge: '临时', tone: 'sun', path: '/desktop/recent' },
];

const previewCards: CardItem[] = [
  { title: '主文件预览', meta: '视频封面、图片缩略图、文档占位', body: '仅展示预览卡片，不包含真实播放器。', badge: 'Preview', tone: 'mint', path: '/desktop/preview' },
  { title: '元数据', meta: '大小、时间、标签、状态', body: '和右侧概览区保持连贯。', badge: 'Meta', tone: 'sky', path: '/desktop/preview' },
  { title: '版本与分享', meta: '历史与外发入口', body: '从预览直接跳到版本和分享页。', badge: 'Flow', tone: 'violet', path: '/desktop/versions' },
];

const searchCards: CardItem[] = [
  { title: '搜索状态', meta: '结果、空态、失败态', body: '把复杂搜索结果变成展示态。', badge: 'Search', tone: 'mint', path: '/desktop/states' },
  { title: '错误码', meta: '401、404、500 的视觉占位', body: '用统一卡片表达不同错误。', badge: 'Error', tone: 'sun', path: '/desktop/states' },
  { title: '历史记录', meta: '最近搜索词与定位', body: '延续搜索体验，但不做真实检索。', badge: 'History', tone: 'sky', path: '/desktop/files' },
];

const uploadCards: CardItem[] = [
  { title: '拖拽上传', meta: '把文件拖到这里开始', body: '用于展示上传卡片和状态。', badge: 'Drop', tone: 'mint', path: '/desktop/upload' },
  { title: '加密队列', meta: '上传前自动打包加密', body: '和传输页共享同一视觉系统。', badge: 'Lock', tone: 'violet', path: '/desktop/transfer' },
  { title: '断点续传', meta: '网络波动也能继续', body: '在预览与通知之间串起状态。', badge: 'Resume', tone: 'sky', path: '/desktop/transfer' },
];

const sharedCards: CardItem[] = [
  { title: '共享工作区', meta: '按人员和链接分层', body: '保持“共享”与“共享空间”可互跳。', badge: 'Workspace', tone: 'mint', path: '/desktop/share' },
  { title: '链接到期', meta: '有效期、密码、访问状态', body: '让分享页与回收站页互相串联。', badge: 'Expiry', tone: 'sun', path: '/desktop/share' },
  { title: '外部访问', meta: '访客和协作人显示不同状态', body: '用于模拟权限卡片。', badge: 'Access', tone: 'sky', path: '/desktop/shared' },
];

const mobileRecent: TimelineItem[] = [
  { title: 'TationCloud_素材包.zip', meta: '2.1 GB · 加密中', body: '在上传页持续推进。', path: '/app/upload' },
  { title: '旅行视频.mov', meta: '840 MB · 待解锁', body: '可进入预览页查看占位内容。', path: '/app/preview' },
  { title: '方案说明.pdf', meta: '24 MB · 已分享', body: '和分享页保持一致。', path: '/app/share' },
];

const mobileFileCards: CardItem[] = [
  { title: '工作文件夹', meta: '32 个项目', body: '适合手机端快速查看。', badge: 'Folder', tone: 'mint', path: '/app/files' },
  { title: '共享链接', meta: '14 条有效', body: '一屏看完外发状态。', badge: 'Share', tone: 'sky', path: '/app/share' },
  { title: '上传队列', meta: '2 个任务进行中', body: '跳转到上传页查看进度。', badge: 'Queue', tone: 'sun', path: '/app/upload' },
];

const mobileSettingsCards: CardItem[] = [
  { title: '语言', meta: '中文 / English', body: '和桌面端同步。', badge: 'Locale', tone: 'mint', path: '/app/settings' },
  { title: '主题', meta: '浅色 / 深色', body: '与桌面端共用偏好。', badge: 'Theme', tone: 'sky', path: '/app/settings' },
  { title: '账号', meta: '登录、找回和安全', body: '可跳回 Auth 页面。', badge: 'Auth', tone: 'violet', path: '/app/auth' },
];

const landingDesktopLinks: NavItem[] = [
  { label: '首页', path: '/desktop/home' },
  { label: '文件', path: '/desktop/files' },
  { label: '最近', path: '/desktop/recent' },
  { label: '分享', path: '/desktop/share' },
  { label: '会员', path: '/desktop/membership' },
  { label: '设置', path: '/desktop/settings' },
  { label: '回收站', path: '/desktop/trash' },
  { label: '搜索', path: '/desktop/search' },
  { label: '预览', path: '/desktop/preview' },
  { label: '上传', path: '/desktop/upload' },
  { label: '通知中心', path: '/desktop/notifications' },
  { label: '传输', path: '/desktop/transfer' },
  { label: '版本', path: '/desktop/versions' },
  { label: '账单', path: '/desktop/billing' },
  { label: '文件夹', path: '/desktop/folder' },
  { label: '状态案例', path: '/desktop/states' },
  { label: '共享', path: '/desktop/shared' },
  { label: '登录', path: '/desktop/auth' },
];

const landingAppLinks: NavItem[] = [
  { label: '首页', path: '/app/home' },
  { label: '文件', path: '/app/files' },
  { label: '预览', path: '/app/preview' },
  { label: '上传', path: '/app/upload' },
  { label: '分享', path: '/app/share' },
  { label: '会员', path: '/app/membership' },
  { label: '回收站', path: '/app/trash' },
  { label: '设置', path: '/app/settings' },
  { label: '登录', path: '/app/auth' },
];

const sectionPresets: Record<Exclude<SectionKey, 'landing' | 'auth-login' | 'auth-register' | 'auth-recover'>, PanelPreset> = {
  'desktop-home': {
    main: [
      { kind: 'list', title: '最近文件', note: '按时间排列的演示列表', items: recentFiles },
      { kind: 'cards', title: '快捷入口', note: '页面之间保持连贯', columns: 3, items: fileCards },
    ],
    rail: [
      { kind: 'metric', title: '空间概览', value: '1.2 TB / 2 TB', note: '已连接 3 台设备，18 个加密文件。', accent: 'primary' },
      { kind: 'cards', title: '页面地图', columns: 2, items: desktopSupportLinks.slice(0, 4).map((item, index) => ({
        title: item.label,
        meta: index === 0 ? '通知与提示' : index === 1 ? '传输队列' : index === 2 ? '版本对比' : '账单和记录',
        body: '点击进入对应的展示页。',
        badge: 'Route',
        tone: index % 2 === 0 ? 'mint' : 'sky',
        path: item.path,
      })) },
      { kind: 'timeline', title: '近期动态', items: recentActivity },
    ],
  },
  'desktop-files': {
    main: [
      { kind: 'list', title: '文件列表', note: '每行都是可点击的展示项', items: recentFiles },
      { kind: 'cards', title: '文件夹与分类', columns: 3, items: folderItems },
    ],
    rail: [
      { kind: 'timeline', title: '最近变化', items: recentActivity },
      { kind: 'chips', title: '相关页面', links: [
        { label: '预览', path: '/desktop/preview' },
        { label: '上传', path: '/desktop/upload' },
        { label: '分享', path: '/desktop/share' },
        { label: '回收站', path: '/desktop/trash' },
      ] },
    ],
  },
  'desktop-recent': {
    main: [
      { kind: 'timeline', title: '活动流', items: recentActivity },
      { kind: 'progress', title: '传输概况', items: transferItems },
    ],
    rail: [
      { kind: 'cards', title: '相关入口', columns: 2, items: [
        { title: '通知中心', meta: '查看提醒与状态', body: '把最近的消息整理成一页。', badge: 'Info', tone: 'mint', path: '/desktop/notifications' },
        { title: '版本历史', meta: '查看旧版文件', body: '从最近页进入版本页。', badge: 'Version', tone: 'violet', path: '/desktop/versions' },
        { title: '上传队列', meta: '查看当前传输', body: '继续跟踪加密进度。', badge: 'Queue', tone: 'sky', path: '/desktop/upload' },
        { title: '回收站', meta: '误删内容恢复', body: '保持最近状态与删除状态相连。', badge: 'Trash', tone: 'sun', path: '/desktop/trash' },
      ] },
    ],
  },
  'desktop-search': {
    main: [
      { kind: 'cards', title: '搜索场景', columns: 3, items: searchCards },
      { kind: 'list', title: '示例搜索词', items: [
        { title: '加密文件', meta: '命中 18 条 · 图文混排', status: '结果' },
        { title: '旅行视频', meta: '命中 3 条 · 预览可跳转', status: '结果' },
        { title: '不存在的内容', meta: '0 条结果 · 触发空态', status: '空态', tone: 'warning' },
      ] },
    ],
    rail: [
      { kind: 'metric', title: '检索状态', value: '3 种', note: '结果、空态、失败态', accent: 'sky' },
      { kind: 'chips', title: '相关页面', links: [
        { label: '状态案例', path: '/desktop/states' },
        { label: '文件库', path: '/desktop/files' },
        { label: '预览', path: '/desktop/preview' },
      ] },
    ],
  },
  'desktop-preview': {
    main: [
      { kind: 'cards', title: '预览内容', columns: 3, items: previewCards },
      { kind: 'list', title: '文件元数据', items: [
        { title: '文件名', meta: 'TationCloud_素材包.zip', status: 'ZIP' },
        { title: '大小', meta: '2.1 GB', status: '已加密' },
        { title: '更新时间', meta: '2026-04-06 09:10', status: '最新' },
      ] },
    ],
    rail: [
      { kind: 'timeline', title: '版本历史', items: versionItems },
      { kind: 'chips', title: '相关页面', links: [
        { label: '版本', path: '/desktop/versions' },
        { label: '分享', path: '/desktop/share' },
        { label: '上传', path: '/desktop/upload' },
      ] },
    ],
  },
  'desktop-upload': {
    main: [
      { kind: 'progress', title: '传输队列', items: transferItems },
      { kind: 'cards', title: '上传提示', columns: 3, items: uploadCards },
    ],
    rail: [
      { kind: 'metric', title: '当前队列', value: '3 项', note: '可暂停、可恢复、可继续。', accent: 'mint' },
      { kind: 'chips', title: '相关页面', links: [
        { label: '传输', path: '/desktop/transfer' },
        { label: '预览', path: '/desktop/preview' },
        { label: '设置', path: '/desktop/settings' },
      ] },
    ],
  },
  'desktop-membership': {
    main: [
      { kind: 'cards', title: '套餐展示', columns: 3, items: membershipCards },
      { kind: 'list', title: '权益说明', items: [
        { title: '容量加成', meta: '2 TB 空间 · 批量加速', status: '权益' },
        { title: '版本历史', meta: '保留更多历史版本', status: '权益' },
        { title: '优先通道', meta: '上传与分享更顺畅', status: '权益' },
      ] },
    ],
    rail: [
      { kind: 'metric', title: '当前会员', value: 'SVIP', note: '示意为高阶权益视图。', accent: 'violet' },
      { kind: 'chips', title: '相关页面', links: [
        { label: '账单', path: '/desktop/billing' },
        { label: '设置', path: '/desktop/settings' },
        { label: '分享', path: '/desktop/share' },
      ] },
    ],
  },
  'desktop-settings': {
    main: [
      { kind: 'cards', title: '设置卡片', columns: 3, items: settingsCards },
      { kind: 'list', title: '账号与设备', items: [
        { title: '当前账号', meta: 'TationCloud Demo · 个人云盘', status: '在线', tone: 'success' },
        { title: '同步设备', meta: '桌面端、App 端、网页端', status: '3 台', tone: 'muted' },
        { title: '密钥状态', meta: '仅用于展示锁定感', status: '安全', tone: 'success' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '相关页面', links: [
        { label: '登录', path: '/desktop/auth' },
        { label: '注册', path: '/desktop/auth/register' },
        { label: '找回', path: '/desktop/auth/recover' },
      ] },
      { kind: 'metric', title: '偏好同步', value: '实时', note: '主题和语言会写入本地状态。', accent: 'mint' },
    ],
  },
  'desktop-share': {
    main: [
      { kind: 'cards', title: '分享面板', columns: 3, items: [
        { title: '公开链接', meta: '可复制、可失效、可加密码', badge: '链接', tone: 'mint', path: '/desktop/share' },
        { title: '协作成员', meta: '访客、编辑者、管理员分层', badge: '成员', tone: 'sky', path: '/desktop/share' },
        { title: '权限窗口', meta: '仅展示权限状态与到期信息', badge: '权限', tone: 'sun', path: '/desktop/share' },
      ] },
      { kind: 'list', title: '成员状态', items: [
        { title: '张三', meta: '可编辑 · 今日 10:20 登录', status: '成员' },
        { title: '李四', meta: '可查看 · 昨日 18:12 登录', status: '访客' },
        { title: '外部链接', meta: '已设置密码与到期时间', status: '已保护' },
      ] },
    ],
    rail: [
      { kind: 'metric', title: '有效链接', value: '14 条', note: '展示链接状态，不生成真实 URL。', accent: 'sky' },
      { kind: 'chips', title: '相关页面', links: [
        { label: '共享', path: '/desktop/shared' },
        { label: '版本', path: '/desktop/versions' },
        { label: '回收站', path: '/desktop/trash' },
      ] },
    ],
  },
  'desktop-trash': {
    main: [
      { kind: 'list', title: '删除列表', items: [
        { title: '旧版演示.mov', meta: '视频 · 删除于今天 09:10', status: '可恢复', tone: 'warning' },
        { title: '临时截图.png', meta: '图片 · 删除于昨天 18:22', status: '可恢复', tone: 'warning' },
        { title: '过期分享链接', meta: '链接 · 删除于昨天 15:40', status: '已过期', tone: 'danger' },
      ] },
      { kind: 'cards', title: '清理策略', columns: 3, items: [
        { title: '7 天保留', meta: '默认临时保留', body: '用于演示软删除。', badge: 'Policy', tone: 'mint' },
        { title: '手动恢复', meta: '点击可回到文件库', body: '与文件页形成闭环。', badge: 'Restore', tone: 'sky' },
        { title: '彻底删除', meta: '仅做界面占位', body: '不实现真实删除。', badge: 'Delete', tone: 'sun' },
      ] },
    ],
    rail: [
      { kind: 'metric', title: '保留期', value: '7 天', note: '展示软删除的时间概念。', accent: 'sun' },
      { kind: 'chips', title: '相关页面', links: [
        { label: '文件库', path: '/desktop/files' },
        { label: '状态案例', path: '/desktop/states' },
        { label: '分享', path: '/desktop/share' },
      ] },
    ],
  },
  'desktop-notifications': {
    main: [
      { kind: 'list', title: '通知列表', items: notificationItems },
      { kind: 'cards', title: '通知分类', columns: 3, items: [
        { title: '安全提醒', meta: '登录与密钥相关', body: '用于表达安全性消息。', badge: '安全', tone: 'mint' },
        { title: '分享提醒', meta: '链接复制、协作邀请', body: '用于表达协作消息。', badge: '分享', tone: 'sky' },
        { title: '账单提醒', meta: '会员到期、扣费记录', body: '用于表达会员消息。', badge: '账单', tone: 'sun' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '相关页面', links: [
        { label: '设置', path: '/desktop/settings' },
        { label: '账单', path: '/desktop/billing' },
        { label: '传输', path: '/desktop/transfer' },
      ] },
    ],
  },
  'desktop-transfer': {
    main: [
      { kind: 'progress', title: '任务队列', items: transferItems },
      { kind: 'list', title: '传输说明', items: [
        { title: '暂停', meta: '保留当前进度', status: '可用' },
        { title: '重试', meta: '失败后重新进入队列', status: '可用' },
        { title: '续传', meta: '网络恢复后继续传输', status: '可用' },
      ] },
    ],
    rail: [
      { kind: 'metric', title: '完成比例', value: '76%', note: '示意上传和下载的流转。', accent: 'mint' },
      { kind: 'chips', title: '相关页面', links: [
        { label: '上传', path: '/desktop/upload' },
        { label: '通知', path: '/desktop/notifications' },
        { label: '最近', path: '/desktop/recent' },
      ] },
    ],
  },
  'desktop-versions': {
    main: [
      { kind: 'timeline', title: '版本历史', items: versionItems },
      { kind: 'cards', title: '对比摘要', columns: 3, items: [
        { title: '新增文件夹', meta: '工作资料结构更清晰', body: '展示目录组织的变化。', badge: 'Add', tone: 'mint' },
        { title: '更新封面', meta: '预览图更加完整', body: '用于展示视觉修订。', badge: 'Cover', tone: 'sky' },
        { title: '清理冗余', meta: '回收站中保留旧版', body: '保持“删除”与“版本”互通。', badge: 'Clean', tone: 'sun' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '相关页面', links: [
        { label: '预览', path: '/desktop/preview' },
        { label: '分享', path: '/desktop/share' },
        { label: '账单', path: '/desktop/billing' },
      ] },
    ],
  },
  'desktop-billing': {
    main: [
      { kind: 'cards', title: '套餐与说明', columns: 3, items: membershipCards },
      { kind: 'list', title: '账单明细', items: billingItems },
    ],
    rail: [
      { kind: 'metric', title: '当前费用', value: '¥18 / 月', note: '纯展示金额，不触发支付。', accent: 'sun' },
      { kind: 'chips', title: '相关页面', links: [
        { label: '会员', path: '/desktop/membership' },
        { label: '通知', path: '/desktop/notifications' },
        { label: '设置', path: '/desktop/settings' },
      ] },
    ],
  },
  'desktop-folder': {
    main: [
      { kind: 'cards', title: '文件夹分类', columns: 3, items: folderItems },
      { kind: 'list', title: '目录内容', items: [
        { title: '项目资料', meta: '文件夹 · 32 项', status: '主目录' },
        { title: '备份相册', meta: '文件夹 · 118 项', status: '图库' },
        { title: '临时收集', meta: '文件夹 · 7 项', status: '待整理' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '相关页面', links: [
        { label: '文件库', path: '/desktop/files' },
        { label: '搜索', path: '/desktop/search' },
        { label: '状态', path: '/desktop/states' },
      ] },
    ],
  },
  'desktop-states': {
    main: [
      { kind: 'cards', title: '状态卡片', columns: 3, items: stateCards },
      { kind: 'list', title: '状态说明', items: [
        { title: '空态', meta: '无内容时呈现提示', status: '状态' },
        { title: '异常态', meta: '展示错误和锁定感', status: '状态' },
        { title: '加载态', meta: '骨架和进度条', status: '状态' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '相关页面', links: [
        { label: '搜索', path: '/desktop/search' },
        { label: '通知', path: '/desktop/notifications' },
        { label: '回收站', path: '/desktop/trash' },
      ] },
    ],
  },
  'desktop-shared': {
    main: [
      { kind: 'cards', title: '共享卡片', columns: 3, items: sharedCards },
      { kind: 'timeline', title: '共享记录', items: [
        { title: '方案说明.pdf', meta: '今日 10:20', body: '邀请 3 位成员加入。' },
        { title: '旅行视频.mov', meta: '昨日 18:12', body: '分享链接增加密码。' },
        { title: '临时截图.png', meta: '昨日 15:40', body: '链接已过期并进入回收站。' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '相关页面', links: [
        { label: '分享', path: '/desktop/share' },
        { label: '回收站', path: '/desktop/trash' },
        { label: '版本', path: '/desktop/versions' },
      ] },
    ],
  },
  'app-home': {
    main: [
      { kind: 'list', title: '最近文件', items: mobileRecent.map((item) => ({ ...item, status: item.meta })) },
      { kind: 'cards', title: '快捷入口', columns: 2, items: mobileFileCards },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
  'app-files': {
    main: [
      { kind: 'cards', title: '分类入口', columns: 2, items: mobileFileCards },
      { kind: 'list', title: '文件列表', items: recentFiles.slice(0, 3) },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
  'app-preview': {
    main: [
      { kind: 'cards', title: '预览卡片', columns: 2, items: previewCards.slice(0, 2) },
      { kind: 'timeline', title: '版本记录', items: versionItems.slice(0, 2) },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
  'app-upload': {
    main: [
      { kind: 'progress', title: '传输状态', items: transferItems.slice(0, 2) },
      { kind: 'cards', title: '上传提示', columns: 2, items: uploadCards.slice(0, 2) },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
  'app-share': {
    main: [
      { kind: 'cards', title: '分享卡片', columns: 2, items: [
        { title: '公开链接', meta: '可复制、可失效、可加密码', badge: '链接', tone: 'mint', path: '/app/share' },
        { title: '协作成员', meta: '访客、编辑者、管理员分层', badge: '成员', tone: 'sky', path: '/app/share' },
      ] },
      { kind: 'list', title: '成员状态', items: [
        { title: '张三', meta: '可编辑', status: '在线' },
        { title: '李四', meta: '可查看', status: '访客' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
  'app-membership': {
    main: [
      { kind: 'cards', title: '套餐展示', columns: 2, items: membershipCards.slice(0, 2) },
      { kind: 'list', title: '权益摘要', items: [
        { title: '更大容量', meta: '2 TB 空间', status: '权益' },
        { title: '更快传输', meta: '优先通道', status: '权益' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
  'app-trash': {
    main: [
      { kind: 'list', title: '删除列表', items: [
        { title: '旧版演示.mov', meta: '今天 09:10', status: '可恢复', tone: 'warning' },
        { title: '临时截图.png', meta: '昨天 18:22', status: '可恢复', tone: 'warning' },
      ] },
      { kind: 'cards', title: '清理策略', columns: 2, items: [
        { title: '保留 7 天', meta: '软删除机制', body: '只是展示说明。', badge: 'Policy', tone: 'mint' },
        { title: '手动恢复', meta: '回到文件库', body: '回收站与文件页互跳。', badge: 'Restore', tone: 'sky' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
  'app-settings': {
    main: [
      { kind: 'cards', title: '设置项', columns: 2, items: mobileSettingsCards },
      { kind: 'list', title: '账号状态', items: [
        { title: '当前账号', meta: 'TationCloud Demo', status: '在线' },
        { title: '同步设备', meta: '3 台设备', status: '已连接' },
      ] },
    ],
    rail: [
      { kind: 'chips', title: '更多入口', links: appSupportLinks },
    ],
  },
};

function makePage(base: PageConfig): PageConfig {
  return base;
}

export function getPanelPreset(section: SectionKey) {
  return sectionPresets[section as keyof typeof sectionPresets] ?? { main: [], rail: [] };
}

export function getLandingLinks(layout: 'desktop' | 'app') {
  return layout === 'desktop' ? landingDesktopLinks : landingAppLinks;
}

export const sitePages: PageConfig[] = [
  makePage({
    id: 'landing',
    path: '/',
    layout: 'landing',
    section: 'landing',
    title: 'TationCloud 原型 → Vue 工程',
    subtitle: '桌面端和 App 端已经串成可点击的静态路由，重点展示结构、节奏和页面连贯性。',
    hero: {
      eyebrow: 'Vue Demo',
      title: '把 Pencil 原型变成一套可浏览的 Vue 展示站',
      subtitle: '不实现真实业务，只保留视觉层、路由层和页面关系。',
      primary: { label: '进入桌面端', path: '/desktop/home', variant: 'primary' },
      secondary: { label: '进入 App 端', path: '/app/home', variant: 'secondary' },
      tags: ['桌面端', 'App 端', '路由连贯', '静态展示'],
    },
    quickLinks: [...landingDesktopLinks, ...landingAppLinks],
  }),
  makePage({
    id: 'desktop-home',
    path: '/desktop/home',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'home',
    section: 'desktop-home',
    breadcrumb: '首页 / Home',
    title: '个人网盘总览',
    subtitle: '中文 / English 双语提示、VIP / SVIP 权益和加密上传都被整理到一个清爽的总览里。',
    hero: {
      eyebrow: 'Overview',
      title: '把文件、会员和加密都放在一个清爽的地方',
      subtitle: '这是一套静态展示版 Vue 页面，按钮主要负责串联路由。',
      primary: { label: '上传文件', path: '/desktop/upload', variant: 'primary' },
      secondary: { label: '前往文件', path: '/desktop/files', variant: 'secondary' },
      tags: ['中文 / EN', 'VIP / SVIP', '加密上传'],
    },
    stats: [
      { label: '空间使用', value: '1.2 TB / 2 TB', hint: '容量进度条在侧边栏同步展示' },
      { label: '在线设备', value: '3 台', hint: '桌面端与 App 端共同连接' },
      { label: '加密文件', value: '18 个', hint: '与上传和传输页共享状态' },
    ],
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-files',
    path: '/desktop/files',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'files',
    section: 'desktop-files',
    breadcrumb: '文件 / Files',
    title: '文件库',
    subtitle: '把文件、文件夹和状态整理成更容易浏览的卡片与列表。',
    hero: {
      eyebrow: 'Library',
      title: '把文件和文件夹排成清楚的层级',
      subtitle: '用于展示文件、目录和分享关系的层次感。',
      primary: { label: '查看预览', path: '/desktop/preview', variant: 'primary' },
      secondary: { label: '上传新文件', path: '/desktop/upload', variant: 'secondary' },
      tags: ['文件夹', '最近更新', '已共享'],
    },
    stats: [
      { label: '文件总数', value: '2,438' },
      { label: '共享文件', value: '36' },
      { label: '加密文件', value: '18' },
    ],
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-recent',
    path: '/desktop/recent',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'recent',
    section: 'desktop-recent',
    breadcrumb: '最近 / Recent',
    title: '最近',
    subtitle: '用于展示近期活动、上传队列和版本切换的静态路由。',
    hero: {
      eyebrow: 'Recent',
      title: '最近发生的事情都放在一页里',
      subtitle: '从上传、通知到版本历史，统一走同一套视觉系统。',
      primary: { label: '去传输', path: '/desktop/transfer', variant: 'primary' },
      secondary: { label: '去通知', path: '/desktop/notifications', variant: 'secondary' },
      tags: ['最近动态', '传输队列', '版本更新'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-search',
    path: '/desktop/search',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'search',
    section: 'desktop-search',
    breadcrumb: '搜索 / Search',
    title: '搜索状态',
    subtitle: '搜索页面只做状态展示，不接真实索引或后端查询。',
    hero: {
      eyebrow: 'Search',
      title: '搜索状态、错误码和空态案例',
      subtitle: '通过卡片组合把各种结果态串起来。',
      primary: { label: '查看状态案例', path: '/desktop/states', variant: 'primary' },
      secondary: { label: '返回文件库', path: '/desktop/files', variant: 'secondary' },
      tags: ['空态', '错误码', '历史记录'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-preview',
    path: '/desktop/preview',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'preview',
    section: 'desktop-preview',
    breadcrumb: '预览 / Preview',
    title: '预览',
    subtitle: '预览页保留了图片、视频、文档和版本的串联感。',
    hero: {
      eyebrow: 'Preview',
      title: '把预览、元数据和版本串在一起',
      subtitle: '用于展示文件详情和轻量级操作区。',
      primary: { label: '查看版本', path: '/desktop/versions', variant: 'primary' },
      secondary: { label: '分享链接', path: '/desktop/share', variant: 'secondary' },
      tags: ['预览图', '元数据', '版本'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-upload',
    path: '/desktop/upload',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'upload',
    section: 'desktop-upload',
    breadcrumb: '上传 / Upload',
    title: '上传',
    subtitle: '上传、加密和断点续传作为一个展示链条串起来。',
    hero: {
      eyebrow: 'Upload',
      title: '上传、加密和断点续传排在同一条线',
      subtitle: '只渲染进度和队列，不做真实上传。',
      primary: { label: '查看传输', path: '/desktop/transfer', variant: 'primary' },
      secondary: { label: '进入回收站', path: '/desktop/trash', variant: 'secondary' },
      tags: ['拖拽上传', '加密队列', '断点续传'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-membership',
    path: '/desktop/membership',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'membership',
    section: 'desktop-membership',
    breadcrumb: '会员 / Membership',
    title: '会员',
    subtitle: '会员页面用于展示容量、速度和版本历史等权益。',
    hero: {
      eyebrow: 'Membership',
      title: 'VIP / SVIP 让容量和速度更从容',
      subtitle: '只保留权益层级和外观，不接真实支付。',
      primary: { label: '查看账单', path: '/desktop/billing', variant: 'primary' },
      secondary: { label: '进入设置', path: '/desktop/settings', variant: 'secondary' },
      tags: ['VIP', 'SVIP', '权益中心'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-settings',
    path: '/desktop/settings',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'settings',
    section: 'desktop-settings',
    breadcrumb: '设置 / Settings',
    title: '设置',
    subtitle: '主题、语言和安全选项都在这里统一展示。',
    hero: {
      eyebrow: 'Settings',
      title: '统一管理主题、语言和安全选项',
      subtitle: '页面里的切换控件只影响展示状态。',
      primary: { label: '打开登录页', path: '/desktop/auth', variant: 'primary' },
      secondary: { label: '查看通知中心', path: '/desktop/notifications', variant: 'secondary' },
      tags: ['主题', '语言', '安全'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-share',
    path: '/desktop/share',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'share',
    section: 'desktop-share',
    breadcrumb: '分享 / Share',
    title: '分享',
    subtitle: '分享页负责展示链接、权限和成员状态的组合。',
    hero: {
      eyebrow: 'Share',
      title: '分享链接、协作成员和权限状态',
      subtitle: '把外发、协作与到期状态做成可浏览的卡片。',
      primary: { label: '查看共享空间', path: '/desktop/shared', variant: 'primary' },
      secondary: { label: '进入回收站', path: '/desktop/trash', variant: 'secondary' },
      tags: ['公开链接', '协作成员', '权限状态'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-trash',
    path: '/desktop/trash',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'trash',
    section: 'desktop-trash',
    breadcrumb: '回收站 / Trash',
    title: '回收站',
    subtitle: '回收站用来展示删除、保留和恢复的状态。',
    hero: {
      eyebrow: 'Trash',
      title: '回收站只是暂存，不是终点',
      subtitle: '展示删除时间、保留策略和恢复入口。',
      primary: { label: '恢复文件', path: '/desktop/files', variant: 'primary' },
      secondary: { label: '查看状态', path: '/desktop/states', variant: 'secondary' },
      tags: ['暂存', '恢复', '清理'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-notifications',
    path: '/desktop/notifications',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'recent',
    section: 'desktop-notifications',
    breadcrumb: '通知中心 / Notifications',
    title: '通知中心',
    subtitle: '通知页面在原型里是独立分支，这里保留为静态路由。',
    hero: {
      eyebrow: 'Notifications',
      title: '通知中心只是信息聚合，不做真实推送',
      subtitle: '以列表和状态卡片呈现提醒、登录和分享变化。',
      primary: { label: '查看设置', path: '/desktop/settings', variant: 'primary' },
      secondary: { label: '查看传输', path: '/desktop/transfer', variant: 'secondary' },
      tags: ['提醒', '登录', '状态'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-transfer',
    path: '/desktop/transfer',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'recent',
    section: 'desktop-transfer',
    breadcrumb: '传输 / Transfer',
    title: '传输',
    subtitle: '传输队列、进度条和断点续传是这个页面的核心表情。',
    hero: {
      eyebrow: 'Transfer',
      title: '传输队列、进度和错误重试',
      subtitle: '把上传、下载和加密进度做成一列可读的展示卡。',
      primary: { label: '返回上传', path: '/desktop/upload', variant: 'primary' },
      secondary: { label: '查看通知', path: '/desktop/notifications', variant: 'secondary' },
      tags: ['进度条', '重试', '断点续传'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-versions',
    path: '/desktop/versions',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'recent',
    section: 'desktop-versions',
    breadcrumb: '版本 / Versions',
    title: '版本',
    subtitle: '版本页用于展示历史版本、修订时间和对比入口。',
    hero: {
      eyebrow: 'Versions',
      title: '版本历史和差异摘要',
      subtitle: '让预览页、回收站和分享页都能回到同一个脉络。',
      primary: { label: '查看预览', path: '/desktop/preview', variant: 'primary' },
      secondary: { label: '查看账单', path: '/desktop/billing', variant: 'secondary' },
      tags: ['历史', '差异', '回溯'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-billing',
    path: '/desktop/billing',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'membership',
    section: 'desktop-billing',
    breadcrumb: '账单 / Billing',
    title: '账单',
    subtitle: '账单页用于展示会员、到期和容量变化。',
    hero: {
      eyebrow: 'Billing',
      title: '账单与容量变化',
      subtitle: '只做展示，不接真实支付或扣费逻辑。',
      primary: { label: '查看会员', path: '/desktop/membership', variant: 'primary' },
      secondary: { label: '查看设置', path: '/desktop/settings', variant: 'secondary' },
      tags: ['账单', '容量', '到期'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-folder',
    path: '/desktop/folder',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'files',
    section: 'desktop-folder',
    breadcrumb: '文件夹 / Folder',
    title: '文件夹',
    subtitle: '文件夹页用于表达目录结构、归档和浏览关系。',
    hero: {
      eyebrow: 'Folder',
      title: '文件夹树和批量浏览',
      subtitle: '强调目录关系，不处理实际拖拽或树操作。',
      primary: { label: '返回文件库', path: '/desktop/files', variant: 'primary' },
      secondary: { label: '打开搜索', path: '/desktop/search', variant: 'secondary' },
      tags: ['目录', '归档', '浏览'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-states',
    path: '/desktop/states',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'settings',
    section: 'desktop-states',
    breadcrumb: '状态案例 / States',
    title: '状态案例',
    subtitle: '状态页专门展示空态、异常态和加载态。',
    hero: {
      eyebrow: 'States',
      title: '空态、异常态和加载态的统一展示',
      subtitle: '用于原型中所有“无内容”的视觉占位。',
      primary: { label: '查看搜索', path: '/desktop/search', variant: 'primary' },
      secondary: { label: '查看回收站', path: '/desktop/trash', variant: 'secondary' },
      tags: ['空态', '异常态', '加载态'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-shared',
    path: '/desktop/shared',
    layout: 'desktop',
    device: 'desktop',
    navKey: 'share',
    section: 'desktop-shared',
    breadcrumb: '共享 / Shared',
    title: '共享空间',
    subtitle: '共享空间页是对分享关系的外层视图。',
    hero: {
      eyebrow: 'Shared',
      title: '共享空间的外层视图',
      subtitle: '协作成员、外部链接和权限状态都被保留为静态内容。',
      primary: { label: '进入分享页', path: '/desktop/share', variant: 'primary' },
      secondary: { label: '查看版本', path: '/desktop/versions', variant: 'secondary' },
      tags: ['共享空间', '协作', '外部访问'],
    },
    quickLinks: desktopSupportLinks,
  }),
  makePage({
    id: 'desktop-auth-login',
    path: '/desktop/auth',
    layout: 'auth',
    device: 'desktop',
    navKey: 'auth',
    section: 'auth-login',
    breadcrumb: '登录 / Sign In',
    title: '欢迎回来',
    subtitle: '登录页保留双栏结构，用于展示品牌和表单的关系。',
    auth: {
      tabs: authTabs,
      bullets: ['支持邮箱、手机号和验证码三种入口。', '中文 / English 提示和桌面端视觉保持一致。', '右侧表单只做展示，不触发真实提交。'],
      fields: [
        { label: '邮箱 / 手机号', placeholder: '输入账号' },
        { label: '密码', placeholder: '输入密码' },
      ],
      primary: { label: '登录 TationCloud', path: '/desktop/home', variant: 'primary' },
      helperLinks: [
        { label: '注册', path: '/desktop/auth/register' },
        { label: '找回密码', path: '/desktop/auth/recover' },
        { label: '返回首页', path: '/desktop/home' },
      ],
      note: '仅做界面展示，点击按钮会跳到首页。',
    },
  }),
  makePage({
    id: 'desktop-auth-register',
    path: '/desktop/auth/register',
    layout: 'auth',
    device: 'desktop',
    navKey: 'auth',
    section: 'auth-register',
    breadcrumb: '注册 / Register',
    title: '创建账号',
    subtitle: '注册页复用同一套双栏结构，但更偏向信息收集展示。',
    auth: {
      tabs: authTabs,
      bullets: ['用卡片形式展示注册步骤和账号输入。', '和登录页共享同一套视觉语言。', '不实现验证码和提交逻辑。'],
      fields: [
        { label: '邮箱 / 手机号', placeholder: '输入账号' },
        { label: '验证码', placeholder: '输入验证码' },
        { label: '密码', placeholder: '输入密码' },
        { label: '确认密码', placeholder: '再次输入密码' },
      ],
      primary: { label: '创建账号', path: '/desktop/auth', variant: 'primary' },
      helperLinks: [
        { label: '返回登录', path: '/desktop/auth' },
        { label: '找回密码', path: '/desktop/auth/recover' },
      ],
      note: '表单仅用于展示布局，不会实际注册。',
    },
  }),
  makePage({
    id: 'desktop-auth-recover',
    path: '/desktop/auth/recover',
    layout: 'auth',
    device: 'desktop',
    navKey: 'auth',
    section: 'auth-recover',
    breadcrumb: '找回 / Recover',
    title: '找回密码',
    subtitle: '找回页保留和注册页一致的分栏节奏。',
    auth: {
      tabs: authTabs,
      bullets: ['展示邮箱找回、验证码和重置链接的组合。', '让登录、注册、找回在路由上互相衔接。', '不会发送真实邮件。'],
      fields: [
        { label: '邮箱 / 手机号', placeholder: '输入账号' },
        { label: '验证码', placeholder: '输入验证码' },
        { label: '新密码', placeholder: '输入新密码' },
      ],
      primary: { label: '发送重置链接', path: '/desktop/auth', variant: 'primary' },
      helperLinks: [
        { label: '返回登录', path: '/desktop/auth' },
        { label: '注册账号', path: '/desktop/auth/register' },
      ],
      note: '找回流程只作为视觉占位。',
    },
  }),
  makePage({
    id: 'app-home',
    path: '/app/home',
    layout: 'app',
    device: 'app',
    navKey: 'home',
    section: 'app-home',
    breadcrumb: '首页',
    title: '个人网盘总览',
    subtitle: 'App 端保留更紧凑的卡片和底部导航。',
    hero: {
      eyebrow: 'App',
      title: '更轻量的首页与底部导航',
      subtitle: '把桌面端的复杂感压缩成更适合手机屏幕的卡片。',
      primary: { label: '上传', path: '/app/upload', variant: 'primary' },
      secondary: { label: '搜索', path: '/app/files', variant: 'secondary' },
      tags: ['App 端', '卡片化', '底部导航'],
    },
    stats: [
      { label: '加密文件', value: '18 个' },
      { label: '同步设备', value: '3 台' },
    ],
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-files',
    path: '/app/files',
    layout: 'app',
    device: 'app',
    navKey: 'files',
    section: 'app-files',
    breadcrumb: '文件',
    title: '文件',
    subtitle: '手机端文件页更强调列表和快速跳转。',
    hero: {
      eyebrow: 'Files',
      title: '文件和文件夹在移动端更像一组卡片',
      subtitle: '把文件库、预览和上传串成一条轻链。',
      primary: { label: '进入预览', path: '/app/preview', variant: 'primary' },
      secondary: { label: '前往上传', path: '/app/upload', variant: 'secondary' },
      tags: ['文件', '文件夹', '预览'],
    },
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-preview',
    path: '/app/preview',
    layout: 'app',
    device: 'app',
    navKey: 'preview',
    section: 'app-preview',
    breadcrumb: '预览',
    title: '预览',
    subtitle: '手机端预览保留更大的主卡片和更少的说明。',
    hero: {
      eyebrow: 'Preview',
      title: '在移动端查看预览、版本和分享',
      subtitle: '页面只展示内容与状态，不加载媒体播放器。',
      primary: { label: '查看版本', path: '/app/preview', variant: 'primary' },
      secondary: { label: '分享链接', path: '/app/share', variant: 'secondary' },
      tags: ['预览', '版本', '分享'],
    },
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-upload',
    path: '/app/upload',
    layout: 'app',
    device: 'app',
    navKey: 'upload',
    section: 'app-upload',
    breadcrumb: '上传',
    title: '上传',
    subtitle: '手机端上传页保留进度条和加密提示。',
    hero: {
      eyebrow: 'Upload',
      title: '上传与加密在手机端一样清晰',
      subtitle: '保持“拖拽上传”在移动端的等价展示。',
      primary: { label: '查看传输', path: '/app/upload', variant: 'primary' },
      secondary: { label: '去设置', path: '/app/settings', variant: 'secondary' },
      tags: ['上传', '加密', '传输'],
    },
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-share',
    path: '/app/share',
    layout: 'app',
    device: 'app',
    navKey: 'share',
    section: 'app-share',
    breadcrumb: '分享',
    title: '分享',
    subtitle: '移动端分享页展示链接、成员和权限。',
    hero: {
      eyebrow: 'Share',
      title: '分享链接与成员状态',
      subtitle: '和桌面端的分享页共享同一套视觉基调。',
      primary: { label: '查看共享空间', path: '/app/share', variant: 'primary' },
      secondary: { label: '回收站', path: '/app/trash', variant: 'secondary' },
      tags: ['分享', '成员', '权限'],
    },
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-membership',
    path: '/app/membership',
    layout: 'app',
    device: 'app',
    navKey: 'share',
    section: 'app-membership',
    breadcrumb: '会员',
    title: '会员',
    subtitle: '移动端会员页以更短的层级显示权益。',
    hero: {
      eyebrow: 'Membership',
      title: '会员权益在手机上更像一张说明卡',
      subtitle: '保留 VIP / SVIP 的基本信息。',
      primary: { label: '查看账单', path: '/desktop/billing', variant: 'primary' },
      secondary: { label: '进入设置', path: '/app/settings', variant: 'secondary' },
      tags: ['VIP', 'SVIP', '容量'],
    },
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-trash',
    path: '/app/trash',
    layout: 'app',
    device: 'app',
    navKey: 'settings',
    section: 'app-trash',
    breadcrumb: '回收站',
    title: '回收站',
    subtitle: '回收站在移动端以列表为主。',
    hero: {
      eyebrow: 'Trash',
      title: '回收站只是暂存',
      subtitle: '和桌面端保持同一套删除语义。',
      primary: { label: '恢复文件', path: '/app/files', variant: 'primary' },
      secondary: { label: '查看状态', path: '/desktop/states', variant: 'secondary' },
      tags: ['恢复', '保留', '删除'],
    },
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-settings',
    path: '/app/settings',
    layout: 'app',
    device: 'app',
    navKey: 'settings',
    section: 'app-settings',
    breadcrumb: '设置',
    title: '设置',
    subtitle: '手机端设置页只保留核心偏好。',
    hero: {
      eyebrow: 'Settings',
      title: '主题、语言和账号偏好',
      subtitle: '与桌面端共用同一套偏好状态。',
      primary: { label: '打开登录页', path: '/app/auth', variant: 'primary' },
      secondary: { label: '返回首页', path: '/app/home', variant: 'secondary' },
      tags: ['主题', '语言', '账号'],
    },
    quickLinks: appSupportLinks,
  }),
  makePage({
    id: 'app-auth',
    path: '/app/auth',
    layout: 'auth',
    device: 'app',
    navKey: 'auth',
    section: 'auth-login',
    breadcrumb: '登录',
    title: '欢迎回来',
    subtitle: '移动端登录页更紧凑，但仍然保留同样的结构。',
    auth: {
      tabs: [
        { label: '登录', path: '/app/auth' },
        { label: '注册', path: '/desktop/auth/register' },
        { label: '找回', path: '/desktop/auth/recover' },
      ],
      bullets: ['邮箱、手机号和验证码三种入口都能在这里展示。', '路由与桌面端登录页互相衔接。', '只是静态占位，不会真正提交。'],
      fields: [
        { label: '邮箱 / 手机号', placeholder: '输入账号' },
        { label: '密码', placeholder: '输入密码' },
      ],
      primary: { label: '登录 TationCloud', path: '/app/home', variant: 'primary' },
      helperLinks: [
        { label: '返回首页', path: '/app/home' },
        { label: '桌面端登录', path: '/desktop/auth' },
      ],
      note: '只是登录展示页，不做真实鉴权。',
    },
  }),
];

export const pagesByPath = new Map(sitePages.map((page) => [page.path, page]));

export function findPage(path: string) {
  return pagesByPath.get(path);
}

export function getPagesByLayout(layout: AppLayout) {
  return sitePages.filter((page) => page.layout === layout);
}
