'use client';

import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

export default function Privacy() {
  return (
    <Box
      component="main"
      sx={{
        bgcolor: '#F7FAFC', // ← 背景色をライトグレー (#F7FAFC) に変更
        color: 'black',
        minHeight: '100vh',
        mt: '9vh', // 固定ヘッダー（約9vh）分の余白
      }}
    >
      <Container maxWidth="md">
        {/* ページタイトル */}
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          プライバシーポリシー
        </Typography>

        {/* 導入文 */}
        <Typography
          sx={{
            pb: 3,
            borderBottom: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          TabiMemory（以下、「当サービス」）は、ユーザーのプライバシーを尊重し、
          個人情報を適切に取り扱うことを社会的責務と認識しています。
          本ポリシーでは、当サービスにおけるユーザー情報の取得、利用、共有について説明します。
        </Typography>

        {/* 第1条〜第6条 */}
        <List
          component="ol"
          disablePadding
          sx={{ listStyleType: 'decimal', pl: 2 }}
        >
          {/* 第1条 */}
          <Section index={1} title="取得する情報">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                登録時に入力された氏名、メールアドレスなどのアカウント情報
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                旅の記録投稿時にアップロードされた写真・位置情報・コメント
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                サービス改善を目的としたアクセスログ・クッキー情報
              </ListItem>
            </List>
          </Section>

          {/* 第2条 */}
          <Section index={2} title="情報の利用目的">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスの提供および機能改善
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                不正利用の防止・セキュリティ確保
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                新機能・キャンペーン情報などのご案内（許可を得た場合）
              </ListItem>
            </List>
          </Section>

          {/* 第3条 */}
          <Section index={3} title="第三者提供">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                取得した個人情報は、法令に基づく場合を除き、
                ユーザーの同意なく第三者に開示・提供することはありません。
              </ListItem>
            </List>
          </Section>

          {/* 第4条 */}
          <Section index={4} title="セキュリティ">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスは、個人情報への不正アクセス、紛失、破壊、改ざん及び漏えい等を防止するために、
                適切なセキュリティ対策を実施します。
              </ListItem>
            </List>
          </Section>

          {/* 第5条 */}
          <Section index={5} title="プライバシーポリシーの変更">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                本ポリシーの内容は、必要に応じて変更することがあります。
                変更後の内容は当ページに掲載した時点で効力を生じます。
              </ListItem>
            </List>
          </Section>

          {/* 第6条 */}
          <Section index={6} title="お問い合わせ">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                プライバシーポリシーに関するお問い合わせは、
                <Box component="span" sx={{ fontWeight: 'bold' }}>
                  support.tabimemory@gmail.com
                </Box>{' '}
                までご連絡ください。
              </ListItem>
            </List>
          </Section>
        </List>
      </Container>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/*                               補助コンポーネント                            */
/* -------------------------------------------------------------------------- */

function Section({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ListItem
      component="li"
      sx={{
        listStyleType: 'none',
        display: 'block',
        mt: 3,
        pb: 3,
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        '&:last-of-type': { borderBottom: 'none' },
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {`第${index}条（${title}）`}
      </Typography>
      {children}
    </ListItem>
  );
}
