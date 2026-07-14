# FastAPI Dashboard

一个现代化的全栈 Web 应用，使用 FastAPI + SQLAlchemy + Jinja2 构建，包含用户认证系统、数据库操作、响应式设计和自动化部署。

## 🚀 特性

- **用户认证系统** - JWT 令牌认证，支持注册、登录
- **数据库操作** - SQLAlchemy ORM，支持 SQLite/PostgreSQL/MySQL
- **响应式设计** - 现代化 UI，支持移动端访问
- **自动化部署** - GitHub Actions CI/CD 流程
- **Docker 容器化** - 一键部署，环境隔离

## 🛠️ 技术栈

- **后端**: FastAPI, SQLAlchemy, Python-JOSE, Passlib
- **前端**: Jinja2, HTML5, CSS3, JavaScript
- **数据库**: SQLite (默认), PostgreSQL, MySQL
- **容器**: Docker, Docker Compose
- **CI/CD**: GitHub Actions

## 📦 安装与运行

### 环境要求

- Python 3.10+
- pip

### 本地开发

```bash
# 克隆项目
git clone https://github.com/yourusername/fastapi-dashboard.git
cd fastapi-dashboard

# 安装依赖
cd backend
pip install -r requirements.txt

# 运行应用
python run.py
```

### 使用 Docker

```bash
# 构建并运行
docker-compose up --build

# 访问应用
# http://localhost:8000
```

## 🌐 API 文档

启动应用后访问:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🔧 配置

在 `backend/.env` 文件中配置:

```env
DATABASE_URL=sqlite:///./app.db
SECRET_KEY=your-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## 📁 项目结构

```
fastapi-dashboard/
├── backend/
│   ├── app/
│   │   ├── models/          # 数据库模型
│   │   ├── routers/         # API 路由
│   │   ├── utils/           # 工具函数
│   │   └── main.py          # 应用入口
│   ├── requirements.txt     # 依赖列表
│   └── run.py               # 运行脚本
├── frontend/
│   ├── static/              # 静态资源
│   └── templates/           # 模板文件
├── .github/workflows/       # CI/CD 配置
├── Dockerfile               # Docker 配置
├── docker-compose.yml       # Docker Compose 配置
└── README.md                # 项目说明
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License