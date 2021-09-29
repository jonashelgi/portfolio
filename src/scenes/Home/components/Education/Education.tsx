import React from "react";
import { Container, Typography } from "@mui/material";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot,
} from "@mui/lab";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

const Education = () => {
	return (
		<Container maxWidth="md">
			<Timeline position="alternate">
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: "auto 0" }}
						align="right"
						variant="body2"
						color="text.secondary"
					>
						Hlutastarf
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot>
							<FastfoodIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							MMS
						</Typography>
						<Typography>Vefhönnuður</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: "auto 0" }}
						variant="body2"
						color="text.secondary"
					>
						10:00 am
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot color="primary">
							<LaptopMacIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							Code
						</Typography>
						<Typography>Because it&apos;s awesome!</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot color="primary" variant="outlined">
							<HotelIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							Sleep
						</Typography>
						<Typography>Because you need rest</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
						<TimelineDot color="secondary">
							<RepeatIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							Repeat
						</Typography>
						<Typography>Because this is the life you love!</Typography>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</Container>
	);
};

export default Education;
