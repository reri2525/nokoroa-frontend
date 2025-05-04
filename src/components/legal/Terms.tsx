'use client';

import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

export default function Terms() {
  return (
    <Box
      component="main"
      sx={{
        bgcolor: '#F7FAFC',
        color: 'black',
        minHeight: '100vh',
        mt: '9vh', // 固定ヘッダー分
      }}
    >
      <Container maxWidth="md">
        {/* ページタイトル */}
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          利用規約
        </Typography>

        {/* 導入文 */}
        <Typography
          sx={{
            pb: 3,
            borderBottom: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          本利用規約（以下、「本規約」）は、TabiMemory（以下、「当サービス」）の
          提供条件および当サービスを利用する際の権利・義務関係を定めるものです。
          ご利用前に必ず全文お読みいただき、同意の上でご利用ください。
        </Typography>

        {/* 第1条〜第8条 例示 */}
        <List
          component="ol"
          disablePadding
          sx={{ listStyleType: 'decimal', pl: 2 }}
        >
          <Section index={1} title="適用">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                本規約は、当サービスの利用に関する一切の関係に適用されます。
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスがウェブサイト上で掲載する個別規定は、本規約の一部を構成するものとします。
              </ListItem>
            </List>
          </Section>

          <Section index={2} title="登録">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                利用希望者は、本規約に同意の上、所定の方法で登録申請を行うものとします。
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスは、登録希望者に以下の事由があると判断した場合、
                登録を拒否することがあります。
                <List disablePadding sx={{ listStyleType: 'circle', pl: 4 }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    登録申請に虚偽の事項を届け出た場合
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    本規約に違反したことがある者からの申請である場合
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Section>

          <Section index={3} title="ユーザーIDおよびパスワードの管理">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                ユーザーは、自己の責任においてユーザーIDおよびパスワードを適切に
                管理・保管するものとします。
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合、
                当該ユーザー自身による利用とみなします。
              </ListItem>
            </List>
          </Section>

          <Section index={4} title="禁止事項">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                法令または公序良俗に反する行為
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                犯罪行為に関連する行為
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスのサーバーまたはネットワークの機能を破壊・妨害する行為
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                他のユーザーに関する個人情報等を収集または蓄積する行為
              </ListItem>
            </List>
          </Section>

          <Section index={5} title="当サービスの提供の停止等">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスは、以下のいずれかに該当する場合、ユーザーへ事前に通知することなく
                当サービスの全部または一部の提供を停止または中断できるものとします。
                <List disablePadding sx={{ listStyleType: 'circle', pl: 4 }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    システムの保守点検・更新を行う場合
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    火災・停電・天災など不可抗力により提供が困難になった場合
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Section>

          <Section index={6} title="著作権">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスに掲載されている文章・画像・プログラム等の著作権は、
                当サービスまたは正当な権利を有する第三者に帰属します。
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                ユーザーは、当サービスのコンテンツを権利者の許諾なく
                複製・転載・改変その他二次利用することを禁止します。
              </ListItem>
            </List>
          </Section>

          <Section index={7} title="免責事項">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスは、当サービスに起因してユーザーに生じた
                あらゆる損害について一切の責任を負いません。
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスに関し、ユーザーと他ユーザーまたは第三者との間で
                生じた取引・連絡・紛争等については、ユーザーの責任で解決するものとします。
              </ListItem>
            </List>
          </Section>

          <Section index={8} title="準拠法および裁判管轄">
            <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                本規約の解釈にあたっては、日本法を準拠法とします。
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                当サービスに関して紛争が生じた場合には、
                当サービス所在地を管轄する裁判所を専属的合意管轄とします。
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
