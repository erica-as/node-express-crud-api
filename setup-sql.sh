#!/bin/bash

# Configurar o SQL Server
/opt/mssql/bin/mssql-conf set-sa-password PUCMinas123 --accept-eula
/opt/mssql/bin/mssql-conf set edition express --accept-eula

# Iniciar o SQL Server
/opt/mssql/bin/sqlservr