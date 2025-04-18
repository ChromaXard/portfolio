"use client";
import React, { useEffect, useState } from "react";

import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
	timelineOppositeContentClasses,
} from "@mui/lab";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import { usePathname } from "next/navigation";

export default function Career() {
	// const t = useTranslations("career");
	useEffect(() => {
		const loadTranslations = async () => {
			const frTrad = await import("../../../i18n/translations/fr/career.json");
			const enTrad = await import("../../../i18n/translations/en/career.json");
			setTranslations({ fr: frTrad.career, en: enTrad.career });
			setIsMounted(true);
		};
		loadTranslations().then(() => {
			setTranslations((prev) => ({ ...prev }));
		});
	}, []);
	const [isMounted, setIsMounted] = useState(false);
	const [translations, setTranslations] = useState<{
		[key: string]: { [key: string]: { [key: string]: string } };
	}>({ en: {}, fr: {} });
	const pathname = usePathname();
	const locale = pathname.split("/")[1];
	function t(key: string): string {
		if (!translations[locale] || isMounted == false) return "";
		const keys = key.split(".");
    if (keys.length == 2) {
      return translations[locale][keys[0]][keys[1]] || "";
    }
    return "";
	}
	return (
		<div className="m-4 w-full h-full">
			<Timeline
				position="right"
				sx={{
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.3,
					},
				}}
			>
				<TimelineItem>
					<TimelineOppositeContent color="text.secondary">
						<Typography>{t("actual.date")}</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Typography component="p" sx={{ fontSize: "1.75rem" }}>
							{t("actual.title")}
						</Typography>
						<Typography component="p" sx={{ fontSize: "1.25rem" }}>
							{t("actual.school")}
						</Typography>
						<Typography
							component="p"
							sx={{
								fontSize: "1rem",
								borderBottom: "1px solid",
								paddingBottom: "0.5rem",
							}}
						>
							{t("actual.description")}
						</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent color="text.secondary">
						<Typography>{t("2022-2024.date")}</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="success">
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Typography component="p" sx={{ fontSize: "1.75rem" }}>
							{t("2022-2024.title")}
						</Typography>
						<Typography component="p" sx={{ fontSize: "1.25rem" }}>
							{t("2022-2024.school")}
						</Typography>
            <Typography component="p" sx={{ fontSize: "1rem", borderBottom: "1px solid", paddingBottom: "0.5rem" }}>
							{t("2022-2024.description")}
						</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent color="text.secondary">
						<Typography>{t("2019-2022.date")}</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="success">
							<SchoolIcon />
						</TimelineDot>
					</TimelineSeparator>
					<TimelineContent>
						<Typography component="p" sx={{ fontSize: "1.75rem" }}>
							{t("2019-2022.title")}
						</Typography>
						<Typography
							component="p"
							sx={{
								fontSize: "1.25rem",
							}}
						>
							{t("2019-2022.school")}
						</Typography>
						<Typography component="p" sx={{ fontSize: "1rem" }}>
							{t("2019-2022.description")}
						</Typography>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	);
}
