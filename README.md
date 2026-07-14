# FastAPI Dashboard 🚀

一个基于 **FastAPI** 构建的现代化全栈 Web 应用，展示完整的用户认证系统、响应式前端界面和企业级开发实践。

---

## 🌟 项目亮点

| 能力维度 | 技术实现 | 简历价值 |
|---------|---------|---------|
| **全栈开发** | FastAPI + Jinja2 + SQLAlchemy | 独立完成前后端开发 |
| **用户认证** | JWT 令牌 + BCrypt 加密 | 安全意识与认证方案设计 |
| **数据库设计** | SQLAlchemy ORM + 多数据库支持 | 数据建模与迁移能力 |
| **响应式设计** | 移动端适配 + 现代 UI | 前端工程化与用户体验 |
| **CI/CD** | GitHub Actions 自动化流程 | DevOps 与自动化部署 |
| **容器化** | Docker + Docker Compose | 环境一致性与部署能力 |

---

## 🛠️ 技术栈

### 后端技术
- **FastAPI** - 高性能异步 Web 框架，自动生成 API 文档
- **SQLAlchemy** - 强大的 ORM，支持 SQLite/PostgreSQL/MySQL
- **Python-JOSE** - JWT 令牌生成与验证
- **Passlib** - BCrypt 密码哈希与验证

### 前端技术
- **Jinja2** - 服务器端模板渲染
- **HTML5/CSS3** - 语义化标记与现代样式
- **JavaScript** - 前端交互与 API 调用

### 基础设施
- **Docker** - 容器化部署
- **GitHub Actions** - 持续集成与自动化测试
- **SQLite** - 轻量级数据库（开发环境）

---

## 📋 功能特性

### 🔐 用户认证系统
- ✅ 用户注册与登录
- ✅ JWT 令牌认证
- ✅ 密码安全存储（BCrypt）
- ✅ 令牌过期与刷新机制

### 📊 仪表盘
- ✅ 实时数据统计卡片
- ✅ 用户增长趋势图表
- ✅ 最近活动日志
- ✅ 响应式布局设计

### 👥 用户管理
- ✅ 用户列表展示
- ✅ 用户资料编辑
- ✅ 用户删除功能
- ✅ 角色权限管理

### 👤 个人中心
- ✅ 个人资料查看与修改
- ✅ 头像生成（基于用户名首字母）
- ✅ 密码修改功能

---

## 🚀 快速开始

### 环境要求
- Python 3.10+
- pip
- Git

### 本地开发

```bash
# 克隆项目
git clone https://github.com/Allure2233/fastapi-dashboard.git
cd fastapi-dashboard

# 安装依赖
cd backend
pip install -r requirements.txt

# 运行应用
python run.py

# 访问应用
# http://localhost:8000
```

### Docker 部署

```bash
# 构建并运行
docker-compose up --build

# 访问应用
# http://localhost:8000
```

---

## 🌐 API 文档

启动应用后自动生成交互式文档：

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### API 端点概览

| 端点 | 方法 | 功能 | 认证 |
|-----|------|------|------|
| `/auth/register` | POST | 用户注册 | 否 |
| `/auth/login` | POST | 用户登录 | 否 |
| `/auth/me` | GET | 获取当前用户 | 是 |
| `/users/` | GET | 获取用户列表 | 是 |
| `/users/{user_id}` | GET | 获取单个用户 | 是 |
| `/users/me` | PUT | 更新个人资料 | 是 |
| `/users/{user_id}` | DELETE | 删除用户 | 是（管理员） |

---

## 🔧 配置说明

在 `backend/.env` 文件中配置环境变量：

```env
# 数据库连接
DATABASE_URL=sqlite:///./app.db

# JWT 配置
SECRET_KEY=your-secret-key-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

---

## 📁 项目结构

```
fastapi-dashboard/
├── backend/                              # 后端应用
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                      # 应用入口，路由注册
│   │   ├── models/                      # 数据库模型
│   │   │   ├── db.py                    # 数据库连接与会话管理
│   │   │   └── user.py                  # 用户模型定义
│   │   ├── routers/                     # API 路由
│   │   │   ├── auth.py                  # 认证路由（注册/登录）
│   │   │   └── users.py                 # 用户管理路由
│   │   └── utils/                       # 工具函数
│   │       └── security.py              # JWT 认证与密码加密
│   ├── .env                             # 环境变量配置
│   ├── requirements.txt                 # 依赖列表
│   └── run.py                           # 运行脚本
├── frontend/                            # 前端资源
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css                # 响应式样式表
│   │   └── js/
│   │       └── app.js                   # API 调用与交互逻辑
│   └── templates/                       # Jinja2 模板
│       ├── index.html                   # 首页
│       ├── login.html                   # 登录页
│       ├── register.html                # 注册页
│       ├── dashboard.html               # 仪表盘
│       ├── profile.html                 # 个人中心
│       └── users.html                   # 用户管理
├── .github/
│   └── workflows/
│       └── ci.yml                       # GitHub Actions 配置
├── Dockerfile                           # Docker 镜像配置
├── docker-compose.yml                   # Docker Compose 编排
├── .gitignore                           # Git 忽略规则
└── README.md                            # 项目文档
```

---

## 🧪 测试与 CI/CD

### GitHub Actions 工作流

项目配置了自动 CI/CD 流程：

1. **代码检查** - Flake8 代码风格检查
2. **自动化测试** - pytest 单元测试
3. **Docker 构建** - 自动构建 Docker 镜像

### 运行测试

```bash
cd backend
pip install pytest flake8

# 运行测试
python -m pytest tests/ -v

# 代码检查
flake8 app/ --ignore=E501
```

---

## 📝 开发流程

```
┌─────────────────────────────────────────────────────────────┐
│                    开发工作流                               │
├─────────────────────────────────────────────────────────────┤
│  1. 编写代码 → 2. 本地测试 → 3. Git 提交 → 4. 推送 GitHub   │
│                                      ↓                      │
│                    GitHub Actions 自动执行                   │
│                                      ↓                      │
│              代码检查 → 测试 → Docker 构建 → 部署            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/your-feature`)
3. 提交更改 (`git commit -m 'Add your feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 创建 Pull Request

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 📧 联系

如有问题或建议，欢迎通过以下方式联系：

- GitHub: [@Allure2233](https://github.com/Allure2233)
- 项目地址: [https://github.com/Allure2233/fastapi-dashboard](https://github.com/Allure2233/fastapi-dashboard)