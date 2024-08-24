run:
	docker compose up -d

restart:
	docker compose restart 

down:
	docker compose down

down-v:
	docker compose exec db pg_dumpall -c -U ogame > archive.sql
	docker compose down --volumes

db_restore:
	cat backup.sql | docker compose exec -T db psql -U ogame -d mypage

db_backup:
	docker compose exec db pg_dumpall -c -U ogame > backup.sql

db:
	docker compose exec db psql -U ogame -d mypage
